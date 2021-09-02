import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

import slug from 'slug';
import {postsPerPage} from '../../../next.config';

const pathContents = join(process.cwd(), 'contents');

// Get posts theo file .md
const getPostByFile = (folder) => {
    const pathFolder = join(pathContents, folder);
    let fileNames = fs.readdirSync(pathFolder);

    const categoryPath = join(pathContents, folder, 'a.txt');
    const category = fs.readFileSync(categoryPath, 'utf8');

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
            category,
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

// Lấy bài viết theo tác giả
export function getPostByAuthor (author, pageIndex = 0) {

    const posts = getAllPost()
        .filter(post => {
            return slug(post.author) == author;
        })

    const totalPage = posts.length % postsPerPage == 0 ? Math.floor(posts.length/postsPerPage) - 1 : Math.floor(posts.length/postsPerPage);

    return {
        posts: posts.slice(pageIndex * postsPerPage, (pageIndex + 1) * postsPerPage),
        totalPage,
        pageIndex
    }
}

export function getAllAuthorPageSlug () {

    let posts = getAllPost();

    let authors = posts.map( post => {
        return slug(post.author);
    })
    
    authors = [... new Set(authors)]

    let allSlug = [];
    authors.forEach(author => {
        let postsAuthor = posts.filter(post => {
            return slug(post.author) == author;
        })

        const totalPage = Math.ceil(postsAuthor.length/postsPerPage);

        let pages = [];
        for(let i = 0; i < totalPage; i++) {
            let page = {
                params: {
                    name: author,
                    page: i.toString(),
                }
            };
            pages = [...pages, page];

        }
        allSlug = allSlug.concat(pages);

    })
    return allSlug;
}