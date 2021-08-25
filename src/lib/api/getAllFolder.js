import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function getAllFolder () {
    // Lấy đường dẫn thư mục
    const pathFolders = path.join(process.cwd(), 'contents');

    // Lấy danh sách thư mục chứa bài viết
    const listFolders = fs.readdirSync(pathFolders);

    let posts = [];
    // Lặp qua từng thư mực chứa bài viết.
    listFolders.forEach(folder => {
        let pathFolder = path.join(pathFolders, folder);
        // Lấy danh sách File và Folder
        let pathNames = fs.readdirSync(pathFolder);
        let fileNames = pathNames.map(pathName => {
        
            let slug, fullPath;
    
            // Check pathName và tạo fullName
            if(pathName.includes('.mdx')) {
                // Xoá .mdx để tạo slug theo file
                slug = pathName.replace(/\.mdx$/, '');
    
                // Tạo đường dẫn đầy đủ
                fullPath = path.join(pathFolder, pathName);
            } else {
                // Tạo slug theo Folder
                slug = pathName;
    
                // Tạo đường dẫn đầy đủ
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