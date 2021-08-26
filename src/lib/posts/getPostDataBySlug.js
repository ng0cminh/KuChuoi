import fs, {existsSync} from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

// Lấy nội dung bài viết theo đường dẫn
export default async function getPostDataBySlug(slug) {
    // Lấy đường dẫn tới thư mục chứa content: .../nextjs/contents/blog
    const postsDirectory = path.join(process.cwd(), 'contents')

    let fileContents = null;
      if(existsSync(path.join(postsDirectory, `${slug}.md`))){
        let fullPath = path.join(postsDirectory, `${slug}.md`);
        fileContents = fs.readFileSync(fullPath, 'utf8');
      }
      if(existsSync(path.join(postsDirectory, `${slug}.mdx`))){
        let fullPath = path.join(postsDirectory, `${slug}.mdx`)
        fileContents = fs.readFileSync(fullPath, 'utf8');
      } else {
        // Lấy danh sách thư mục chứa bài viết
        let listFolder = fs.readdirSync(postsDirectory);
        listFolder = listFolder.filter(value => {
          return !value.includes('.mdx') && !value.includes('.mdx')
        })

        const listFolderLength = listFolder.length;
        for(let i=0; i < listFolderLength; i++) {
          let fullPath = path.join(postsDirectory, listFolder[i], `${slug}.mdx`);
          let fullDirect = path.join(postsDirectory, listFolder[i], `${slug}/index.mdx`);

          if(existsSync(fullPath)) {
            fileContents = fs.readFileSync(fullPath, 'utf8');
            break;
          } else if (existsSync(fullDirect)) {
            fileContents = fs.readFileSync(fullDirect, 'utf8');
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