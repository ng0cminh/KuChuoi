import fs from 'fs';
import {join} from 'path'
import matter from 'gray-matter'
import remark from 'remark';
import html from 'remark-html';
import slug from 'slug';

const pathContents = join(process.cwd(), 'contents');

export function getAllFile () {
    const listFolder = fs.readdirSync(pathContents);

    let allPost = [];
    listFolder.forEach(folder => {
        const pathFolder = join(pathContents, folder);
        let fileNames = fs.readdirSync(pathFolder);
        fileNames = fileNames.filter(fileName => {
            return fileName.includes('.md');
        })

        let posts = fileNames.map(fileName => {
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
        allPost = allPost.concat(posts)
    })

    // Xoá  bỏ những bài viết nháp
    allPost = allPost.filter(post => {
        return post.isDraft != true;
    })

    // Sắp xếp bài viết theo thời gian
    return allPost.sort(({ date: a }, { date: b }) => {
        if (a < b) {
          return 1
        } else if (a > b) {
          return -1
        } else {
          return 0
        }
    })
}

// Lấy bài viết theo thư mục
export function getFileByFolder (folder) {
    const pathFolder = join(pathContents, folder);
    const fileNames = fs.readdirSync(pathFolder);

    let posts = fileNames.map(fileName => {
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

    // Xoá  bỏ những bài viết nháp
    posts = posts.filter(post => {
        return post.isDraft != true;
    })

    // Sắp xếp bài viết theo thời gian
    return posts.sort(({ date: a }, { date: b }) => {
        if (a < b) {
          return 1
        } else if (a > b) {
          return -1
        } else {
          return 0
        }
    })

}

// Lấy bài viết theo tác giả
export function getFileByAuthor (author) {
    const folders = fs.readdirSync(pathContents);

    let allPost = [];
    folders.forEach(folder => {
        const pathFolder = join(pathContents, folder);
        let fileNames = fs.readdirSync(pathFolder);
        fileNames = fileNames.filter(fileName => {
            return fileName.includes('.md');
        })

        let posts = fileNames.map(fileName => {
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
        allPost = allPost.concat(posts)
    })

    // Xoá  bỏ những bài viết nháp
    allPost = allPost.filter(post => {
        return post.isDraft != true && slug(post.author) == author;
    })

    // Sắp xếp bài viết theo thời gian
    return allPost.sort(({ date: a }, { date: b }) => {
        if (a < b) {
          return 1
        } else if (a > b) {
          return -1
        } else {
          return 0
        }
    })
}

// Lấy các đường dẫn của tác giả bài viết
export function getAllAuthorSlug () {
    // Lấy danh sách File và Folder
    const folders = fs.readdirSync(pathContents)
  
    let allAuthorSlug = [];

    folders.forEach(folder => {
        
        
        
    })
    return allAuthorSlug;
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