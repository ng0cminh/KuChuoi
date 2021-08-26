import fs from 'fs'
import path from 'path'

// Lấy các đường dẫn của bài viết
export default function getAllPostSlug() {
    // Lấy đường dẫn thư mục
    const pathFolder =  path.join(process.cwd(), 'contents');

    // Lấy danh sách File và Folder
    const pathNames = fs.readdirSync(pathFolder)
  
    let fileNames = [];

    pathNames.forEach((folder) => {
      
      if(folder.includes('.mdx')) {
        fileNames.push(folder);
      } else if(folder.includes('.md')) {
        fileNames.push(folder);
      } else {
        fileNames = fileNames.concat(fs.readdirSync(path.join(pathFolder, folder)));
      }

    })
  
    return fileNames.map(fileName => {
      return {
        params: {
          slug: fileName.includes('.mdx') ? fileName.replace(/\.mdx$/, '') : fileName,
        }
      }
    })

}