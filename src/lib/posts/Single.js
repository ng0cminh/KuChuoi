import fs, {existsSync} from 'fs';
import {join} from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const pathContents = join(process.cwd(), 'contents');

// Lấy các đường dẫn của bài viết
export function getAllPostSlug() {
    // Lấy danh sách File và Folder
    const folders = fs.readdirSync(pathContents)
  
    let allPostSlug = [];

    folders.forEach(folder => {
        let fileNames = fs.readdirSync(join(pathContents, folder));
        fileNames = fileNames.filter(fileName => {
            return fileName.includes('.md')
        })
        allPostSlug = allPostSlug.concat(
            fileNames.map (fileName => {
                return {
                    params: {
                        folder,
                        slug: fileName.replace(/\.md$/, ''),
                    }
                }
            })
        )
    })

    return allPostSlug;
}

// Lấy nội dung bài viết theo đường dẫn
export async function getPostDataBySlug(slug) {
    const folders = fs.readdirSync(pathContents);
    const lengthFolders = folders.length;

    let fileContents = null, folder = null;
    for(let i = 0; i < lengthFolders; i++) {
        const fullPath = join(pathContents, folders[i], `${slug}.md`);
        if(existsSync(fullPath)) {
            folder = folders[i];
            fileContents = fs.readFileSync(fullPath, 'utf8');
            break;
        }
    }

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    if(!matterResult.data.isDraft) {
        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
        const contentHtml = processedContent.toString()
        
        // Combine the data with the slug
        return {
            folder,
            slug,
            contentHtml,
            ...matterResult.data
        }
    }
}
