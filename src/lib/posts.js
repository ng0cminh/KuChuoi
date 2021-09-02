import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

import slug from 'slug';


const pathContents = join(process.cwd(), 'contents');

// Get posts theo file .md
const getPostByFile = (folder) => {
    const pathFolder = join(pathContents, folder);
    let fileNames = fs.readdirSync(pathFolder);

    // Chỉ lấy những File .md
    fileNames = fileNames.filter(fileName => {
        return fileName.includes('.md');
    })

    return fileNames.map(fileName => {
        const slug = `posts/${fileName.replace(/\.md$/, '')}`;
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

function getAllPost () {
    const folders = fs.readdirSync(pathContents);

    let allPost = [];
    folders.forEach(folder => {
        allPost = allPost.concat(getPostByFile(folder));
    })
    
    // Xoá  bỏ những bài viết nháp
    return allPost.filter(post => {
        return post.isDraft != true;
    })
    .sort(({ date: a }, { date: b }) => {
        return a < b ? 1 : a > b ? -1 : 0;
    })
}

// Lấy các đường dẫn của tác giả bài viết
export function getAllAuthorSlug () {
    let posts = getAllPost();

    posts = posts.map( post => {
        return slug(post.author);
    })
    
    posts = [... new Set(posts)]

    return posts.map(author => {
        return {
            params: {
                name: author
            }
        }
    })
}


// Lấy nội dung bài viết nổi bật
export function getPostFeatured () {
    let posts = getAllPost();

    // Lấy những bài viết nổi bật
    return posts.filter(post => {
        return post.isFeatured == true;
    }).slice(0,5)
}