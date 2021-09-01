import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

import {postsPerPage} from '../../../next.config';

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


// Lấy bài viết theo thư mục
export function getPostByFolder (folder, pageIndex = 0) {
    const posts = getPostByFile(folder)
        .filter(post => {
            return post.isDraft != true;
        })
        .sort(({ date: a }, { date: b }) => {
            return a < b ? 1 : a > b ? -1 : 0;
        })
    const totalPage = Math.floor(posts.length/postsPerPage)
    return {
        posts: posts.slice(pageIndex * postsPerPage, (pageIndex + 1) * postsPerPage),
        totalPage,
        pageIndex
    }
}

// Lấy các đường dẫn của tác giả bài viết
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

export function getAllFolderPageSlug () {

    const folders = fs.readdirSync(pathContents);
    let allSlug = [];
    folders.forEach(folder => {
        const posts = getPostByFile(folder);
        const totalPage = Math.ceil(posts.length/postsPerPage);
        let pages = [];
        for(let i = 0; i < totalPage; i++) {
            let page = {
                params: {
                    folder,
                    page: i.toString(),
                }
            };
            pages = [...pages, page];
        }
        allSlug = allSlug.concat(pages);
    })

    return allSlug;
}