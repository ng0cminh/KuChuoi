import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Lấy đường dẫn tới thư mục chứa nội dung bài viết
const pathFolders = path.join(process.cwd(), 'contents');

export function getAllFile () {

    // Lấy danh sách thư mục chứa bài viết
    const listFolders = fs.readdirSync(pathFolders);

    let posts = [];
    // Lặp qua từng thư mực chứa bài viết.
    listFolders.forEach(folder => {

        if(folder.includes('.mdx')) {
            let slug = folder.replace(/\.mdx$/, '');
            // Tạo đường dẫn đầy đủ
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
            // Tạo đường dẫn đầy đủ
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
            let fileNames = pathNames.map(pathName => {
            
                let slug, fullPath;
        
                // Check pathName và tạo fullName
                if(pathName.includes('.mdx')) {
                    // Xoá .mdx để tạo slug theo file
                    slug = pathName.replace(/\.mdx$/, '');
        
                    // Tạo đường dẫn đầy đủ
                    fullPath = path.join(pathFolder, pathName);
                } else if (pathName.includes('.md')) {
                    // Xoá .mdx để tạo slug theo file
                    slug = pathName.replace(/\.md$/, '');
                        
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