import fs from 'fs'
import path from 'path'

// Lấy các đường dẫn của bài viết
export default function getAllPostSlug() {
    // Lấy đường dẫn thư mục
    const pathFolder =  path.join(process.cwd(), 'contents');

    // Lấy danh sách File và Folder
    const pathNames = fs.readdirSync(pathFolder)
  
    let fileNames = [];
    pathNames.forEach((directory) => {
      fileNames = fileNames.concat(fs.readdirSync(path.join(pathFolder, directory)));
    })
  
    return fileNames.map(fileName => {
      return {
        params: {
          slug: fileName.includes('.mdx') ? fileName.replace(/\.mdx$/, '') : fileName,
        }
      }
    })
}