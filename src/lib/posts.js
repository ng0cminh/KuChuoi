import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import slug from 'slug';

const pathContents = join(process.cwd(), 'contents');

// Laay
const getPostByFile = (folder) => {
    const pathFolder = join(pathContents, folder);
    let fileNames = fs.readdirSync(pathFolder);

    // Chỉ lấy những File .md
    fileNames = fileNames.filter(fileName => {
        return fileName.includes('.md');
    })

    return fileNames.map(fileName => {
        const slug = `${folder}/${fileName.replace(/\.md$/, '')}`;
        const fullPath = join(pathFolder, fileName);

        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Tạo metadata cho post bằng cách sử dụng gray-matter
        const matterResult = matter(fileContents);
        return {
            slug,
            folder,
            ...matterResult.data,
        }
    })
}

// Lấy bài viết theo thư mục
export function getPostByFolder (folder) {
    return getPostByFile(folder)
        .filter(post => {
            return post.isDraft != true;
        })
        .sort(({ date: a }, { date: b }) => {
            return a < b ? 1 : a > b ? -1 : 0;
        })
}

export function getAllPost () {
    const folders = fs.readdirSync(pathContents);

    let allPost = [];
    folders.forEach(folder => {
        allPost = allPost.concat(getPostByFile(folder))
    })

    // Xoá  bỏ những bài viết nháp
    return allPost.filter(post => {
        return post.isDraft != true;
        })
        .sort(({ date: a }, { date: b }) => {
            a < b ? 1 : a > b ? -1 : 0
        })
}

// Lấy các đường dẫn của tác giả bài viết
export function getAllAuthorSlug () {
    let posts = getAllPost();

    posts = posts.map( post => {
        return post.author;
    })

    return posts.map(author => {
        return {
            params: {
                name: slug(author)
            }
        }
    })
}

// Lấy bài viết theo tác giả
export function getPostByAuthor (author) {

    const posts = getAllPost();

    // Xoá  bỏ những bài viết không có author
    return posts.filter(post => {
        return slug(post.author) == author;
    })
}


// Lấy các đường dẫn của bài viết
export function getAllPostSlug() {
    // Lấy danh sách File và Folder
    const folders = fs.readdirSync(pathContents)
  
    let allPostSlug = [];

    folders.forEach(folder => {
        const fileNames = fs.readdirSync(join(pathContents, folder));
        allPostSlug = allPostSlug.concat(
            fileNames.map (fileName => {
                return {
                    params: {
                        folder,
                        slug: fileName.replace(/\.md$/, ''),
                    }
                }
            })
        )
    })
    return allPostSlug;
}

// Lấy nội dung bài viết theo đường dẫn
export async function getPostDataBySlug(folder, slug) {

    const fullPath = join(pathContents, folder, `${slug}.md`);

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    if(!matterResult.data.isDraft) {
        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
        const contentHtml = processedContent.toString()
        
        // Combine the data with the slug
        return {
            folder,
            slug,
            contentHtml,
            ...matterResult.data
        }
    }
}

// Lấy nội dung bài viết nổi bật
export function getPostFeatured () {
    let posts = getAllPost();

    // Lấy những bài viết nổi bật
    return posts.filter(post => {
        return post.isFeatured == true;
    })
}