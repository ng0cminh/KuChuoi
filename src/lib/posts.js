import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';
import slug from 'slug';
import remark from 'remark';
import html from 'remark-html';

const pathContents = join(process.cwd(), 'contents');

// Get danh sách thư mục và tên hiển thị dựa vào file a.text
export function getListNameFolder () {
    const folders = fs.readdirSync(pathContents);

    let result = [];
    folders.forEach(folder => {
        const folderPath = join(pathContents, folder, 'a.txt');
        const category = fs.readFileSync(folderPath, 'utf8');
        result.push({
            category,
            folder,
        })
    })

    return result;
}

// Get posts theo file .md
export function getPostByFile (folder, number = undefined, selection = undefined) {
    const pathFolder = join(pathContents, folder);
    let fileNames = fs.readdirSync(pathFolder);

    const categoryPath = join(pathContents, folder, 'a.txt');
    const category = fs.readFileSync(categoryPath, 'utf8');

    // Chỉ lấy những File .md
    fileNames = fileNames.filter(fileName => {
        return fileName.includes('.md');
    })

    return fileNames.map(fileName => {

        const fullPath = join(pathFolder, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Tạo metadata cho post bằng cách sử dụng gray-matter
        const {content, data} = matter(fileContents);

        const slug = fileName.replace(/\.md$/, '');

        return {
            slug,
            category,
            folder,
            content,
            ...data,
        }
    })
    .filter(post => {
        if(post.isDraft != true) {
            if(selection) {
                return post[selection] === undefined ? true : post[selection];
            }
            return true;
        }
    })
    .sort(({ date: a }, { date: b }) => {
        return a < b ? 1 : a > b ? -1 : 0;
    })
    .slice(0, number)
}

// Lấy tất cả bài viết
export function getAllPost () {
    const folders = fs.readdirSync(pathContents);

    let allPost = [];
    folders.forEach(folder => {
        allPost = allPost.concat(getPostByFile(folder));
    })
    
    // Xoá  bỏ những bài viết nháp
    return allPost;
}


// Lấy bài viết theo thư mục
export function getPostByFolder (folder, number = undefined, selection = undefined) {
    const categoryPath = join(pathContents, folder, 'a.txt');
    const category = fs.readFileSync(categoryPath, 'utf8');

    const posts = getPostByFile(folder, number, selection)

    return {
        posts,
        folder,
        category,
    }
}

// Lấy bài viết trên trang chủ
export function getPostsHomePage (number = 6, selection) {
    const folders = fs.readdirSync(pathContents);
    let data = [];
    folders.forEach(folder => {
        data.push(getPostByFolder(folder, number, selection));
    })
    return data;
}

// Lấy các đường dẫn của thư mục bài viết
export function getAllFolderSlug () {
    const folders = fs.readdirSync(pathContents);
    return folders.map(folder => {
        return {
            params: {
                folder
            }
        }
    })
}


// Lấy các đường dẫn của tác giả bài viết
export function getAllAuthorSlug () {
    let posts = getAllPost();

    posts = posts.map( post => {
        return slug(post.author);
    })

    posts = [...new Set(posts)]; // loại bỏ những phần tử trùng nhau trong mảng

    return posts.map(author => {
        return {
            params: {
                name: author
            }
        }
    })
}

// Lấy bài viết theo tác giả
export function getPostByAuthor (author) {

    const posts = getAllPost()
        .filter(post => {
            return slug(post.author) === author;
        });
    const authorName = posts[0].author;

    return {
        posts,
        authorName
    }
}



// Lấy các đường dẫn của bài viết
export function getAllPostSlug() {
    // Lấy danh sách File và Folder
    const folders = fs.readdirSync(pathContents)
  
    let allPostSlug = [];

    folders.forEach(folder => {
        let fileNames = fs.readdirSync(join(pathContents, folder));
        fileNames = fileNames.filter(fileName => {
            return fileName.includes('.md')
        })
        allPostSlug = allPostSlug.concat(
            fileNames.map (fileName => {
                return {
                    params: {
                        slug: fileName.replace(/\.md$/, ''),
                    }
                }
            })
        )
    })

    return allPostSlug;
}

// Lấy nội dung bài viết theo đường dẫn
export async function getPostDataBySlug(slug) {
    const posts = getAllPost();
    const postsLength = posts.length - 1;

    const postIndex = posts.findIndex(post => {
        return post.slug === slug;
    })

    const post = posts[postIndex];
    const prevPost = postIndex > 0 ? posts[postIndex - 1] : null;
    const nextPost = postIndex < postsLength ? posts[postIndex] + 1 : null;

    if(!post.isDraft) {
        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
        .use(html)
        .process(post.content)
        const contentHtml = processedContent.toString()
        
        // Combine the data with the slug
        return {
            ...post,
            content: contentHtml
        }
    }
}


// Lấy bài viết nổi bật
export function getFeaturedPost(number) {
    return getAllPost()
        .filter(post => {
           return post.isFeatured === true;
        })
        .slice(0, number)
}
