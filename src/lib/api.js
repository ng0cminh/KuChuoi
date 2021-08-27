// Các hàm xây dựng lấy post trong file contents có khả năng lấy tất cả các file .md, .mdx
// Có thể lấy dạng file hoặc lấy folder/index.md/.mdx
import fs, {existsSync} from 'fs';
import {join} from 'path'
import matter from 'gray-matter'
import remark from 'remark';
import html from 'remark-html';

// Lấy đường dẫn tới thư mục chứa nội dung bài viết
const rootContents = join(process.cwd(), 'contents');

// Get tất cả các file có trong thư mục gốc
export function getAllFile () {

    // Lấy danh sách thư mục chứa bài viết
    const filesAndFolders = fs.readdirSync(rootContents);

    let posts = [];
    // Lặp qua từng thư mực chứa bài viết.
    filesAndFolders.forEach(fileOrFolder => {
      if(fileOrFolder.includes('.mdx')) {
        let slug = fileOrFolder.replace(/\.mdx$/, '');
        let fullPath = join(rootContents, fileOrFolder);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);
        posts.push( {
            slug,
            ...matterResult.data,
        })

      } else if(fileOrFolder.includes('.md')) {
        let slug = fileOrFolder.replace(/\.md$/, '');
        let fullPath = join(rootContents, fileOrFolder);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        posts.push( {
            slug,
            ...matterResult.data,
        })
      } else {
        let pathFolder = join(rootContents, fileOrFolder);
        // Lấy danh sách File và Folder
        let pathNames = fs.readdirSync(pathFolder);

        // Tạo Slug và đường dẫn tới file
        let fileNames = pathNames.map(pathName => {
            let slug, fullPath;
            if(pathName.includes('.mdx')) {
                slug = pathName.replace(/\.mdx$/, '');
                fullPath = join(pathFolder, pathName);
            } else if (pathName.includes('.md')) {
                slug = pathName.replace(/\.md$/, '');
                fullPath = join(pathFolder, pathName);
            } else {
                slug = pathName;
                fullPath = join(pathFolder, pathName, '/index.mdx');
            }
    
            const fileContents = fs.readFileSync(fullPath, 'utf8');
    
            // Tạo metadata cho post bằng cách sử dụng gray-matter
            const matterResult = matter(fileContents);
            return {
                slug,
                folder: fileOrFolder,
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

// Get File theo thư mục tính từ thư mục chứ nội dung gốc
export function getFileByFolder (folder) {
    // Lấy đường dẫn thư mục
    const pathFolder = join(rootContents, folder);
    
    // Lấy danh sách File và Folder
    const pathNames = fs.readdirSync(pathFolder);

    let posts = pathNames.map(pathName => {
        let slug, fullPath;

        // Check pathName và tạo fullName
        if(pathName.includes('.mdx')) {
            // Xoá .mdx để tạo slug theo file
            slug = pathName.replace(/\.mdx$/, '');

            // Tạo đường dẫn đầy đủ
            fullPath = join(pathFolder, pathName);
        } if(pathName.includes('.md')) {
          // Xoá .mdx để tạo slug theo file
          slug = pathName.replace(/\.md$/, '');

          // Tạo đường dẫn đầy đủ
          fullPath = join(pathFolder, pathName);
        } else {
            // Tạo slug theo Folder
            slug = pathName;

            // Tạo đường dẫn đầy đủ
            fullPath = join(pathFolder, pathName, '/index.mdx');
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

// Lấy các đường dẫn của bài viết
export function getAllPostSlug() {
    // Lấy danh sách File và Folder
    const pathNames = fs.readdirSync(rootContents)
  
    let fileNames = [];

    pathNames.forEach((folder) => {
      
      if(folder.includes('.mdx')) {
        fileNames.push(folder);
      } else if(folder.includes('.md')) {
        fileNames.push(folder);
      } else {
        fileNames = fileNames.concat(fs.readdirSync(join(rootContents, folder)));
      }

    })
  
    return fileNames.map(fileName => {
      return {
        params: {
          slug: fileName.includes('.mdx') ? fileName.replace(/\.mdx$/, '') : fileName.includes('.md') ? fileName.replace(/\.md$/, '') : fileName,
        }
      }
    })

}


// Lấy nội dung bài viết theo đường dẫn
export async function getPostDataBySlug(slug) {
    let fileContents = null;
      if(existsSync(join(rootContents, `${slug}.md`))){
        let fullPath = join(rootContents, `${slug}.md`);
        fileContents = fs.readFileSync(fullPath, 'utf8');
      }
      if(existsSync(join(rootContents, `${slug}.mdx`))){
        let fullPath = join(rootContents, `${slug}.mdx`)
        fileContents = fs.readFileSync(fullPath, 'utf8');
      } else {
        // Lấy danh sách thư mục chứa bài viết
        let listFolder = fs.readdirSync(rootContents);
        listFolder = listFolder.filter(value => {
          return !value.includes('.mdx') && !value.includes('.mdx')
        })

        const listFolderLength = listFolder.length;
        for(let i=0; i < listFolderLength; i++) {
          let fullPathMd = join(rootContents, listFolder[i], `${slug}.md`);
          let fullPath = join(rootContents, listFolder[i], `${slug}.mdx`);
          let fullDirectMd = join(rootContents, listFolder[i], `${slug}/index.md`);
          let fullDirect = join(rootContents, listFolder[i], `${slug}/index.mdx`);


          if(existsSync(fullPath)) {
            fileContents = fs.readFileSync(fullPath, 'utf8');
            break;
          }
          if (existsSync(fullDirect)) {
            fileContents = fs.readFileSync(fullDirect, 'utf8');
            break;
          }
          if (existsSync(fullPathMd)) {
            fileContents = fs.readFileSync(fullPathMd, 'utf8');
            break;
          }
          if (existsSync(fullDirectMd)) {
            fileContents = fs.readFileSync(fullDirectMd, 'utf8');
            break;
          }
        }
      }
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    
    if(!matterResult.data.isDraft) {
      // Use remark to convert markdown into HTML string
      const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
      const contentHtml = processedContent.toString()
      
      // Combine the data with the slug
      return {
        slug,
        contentHtml,
        ...matterResult.data
      }
    }
}