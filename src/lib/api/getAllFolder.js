import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// Lấy đường dẫn tới thư mục chứa nội dung bài viết
const pathFolders = path.join(process.cwd(), 'contents');
export default function getAllFolder () {

    // Lấy danh sách thư mục chứa bài viết
    const listFolders = fs.readdirSync(pathFolders);

    let posts = [];
    // Lặp qua từng thư mực chứa bài viết.
    listFolders.forEach(folder => {

        if(folder.includes('.mdx')) {
            let slug = folder.replace(/\.mdx$/, '');
            let fullPath = path.join(pathFolders, folder);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            const matterResult = matter(fileContents);
            posts.push( {
                slug,
                folder,
                ...matterResult.data,
            })

        } else if(folder.includes('.md')) {
            let slug = folder.replace(/\.md$/, '');
            let fullPath = path.join(pathFolders, folder);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);
            posts.push( {
                slug,
                folder,
                ...matterResult.data,
            })

        } else {
            let pathFolder = path.join(pathFolders, folder);
            // Lấy danh sách File và Folder
            let pathNames = fs.readdirSync(pathFolder);

            // Tạo Slug và đường dẫn tới file
            let fileNames = pathNames.map(pathName => {
                let slug, fullPath;
                if(pathName.includes('.mdx')) {
                    slug = pathName.replace(/\.mdx$/, '');
                    fullPath = path.join(pathFolder, pathName);
                } else if (pathName.includes('.md')) {
                    slug = pathName.replace(/\.md$/, '');
                    fullPath = path.join(pathFolder, pathName);
                } else {
                    slug = pathName;
                    fullPath = path.join(pathFolder, pathName, '/index.mdx');
                }
        
                const fileContents = fs.readFileSync(fullPath, 'utf8');
        
                // Tạo metadata cho post bằng cách sử dụng gray-matter
                const matterResult = matter(fileContents);
                return {
                    slug,
                    folder,
                    ...matterResult.data,
                }
            })
            posts = posts.concat(fileNames);
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