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

export function getPostHomePage (pageIndex = 0) {
    const posts = getAllPost();
    const totalPage = posts.length % postsPerPage == 0 ? Math.floor(posts.length/postsPerPage) - 1 : Math.floor(posts.length/postsPerPage);
    return {
        posts: posts.slice(pageIndex * postsPerPage, (pageIndex + 1) * postsPerPage),
        totalPage,
        pageIndex
    }
}

export function getHomePageSlug () {
    const posts = getAllPost();
    const totalPage = Math.ceil(posts.length/postsPerPage)

    let pages = [];
    for(let i = 0; i < totalPage; i++) {
        let page = {
            params: {
                page: i.toString(),
            }
        };
        pages = [...pages, page];
    }
    return pages;
}