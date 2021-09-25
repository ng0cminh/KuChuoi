const fs = require("fs");
const { join } = require("path");
const matter = require("gray-matter");

function getPostByFile(folder) {
  const pathContents = join(process.cwd(), "contents");
  const pathFolder = join(pathContents, folder);
  let fileNames = fs.readdirSync(pathFolder);

  const categoryPath = join(pathContents, folder, "a.txt");
  const category = fs.readFileSync(categoryPath, "utf8");

  // Chỉ lấy những File .md
  fileNames = fileNames.filter((fileName) => {
    return fileName.includes(".md");
  });

  return fileNames
    .map((fileName) => {
      const fullPath = join(pathFolder, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Tạo metadata cho post bằng cách sử dụng gray-matter
      const { content, data } = matter(fileContents);
      const wordsContent = content.trim().split(/\s+/).length;
      const readTime = Math.ceil(wordsContent / 200);

      const slug = fileName.replace(/\.md$/, "");

      return {
        slug,
        category,
        folder,
        readTime,
        ...data,
      };
    })
    .filter((post) => post.isDraft != true);
}

function postData() {
  const pathContents = join(process.cwd(), "contents");

  const folders = fs.readdirSync(pathContents);

  let posts = [];
  folders.forEach((folder) => {
    posts = posts.concat(getPostByFile(folder));
  });

  return `export const postData = ${JSON.stringify(posts)}`;
}

try {
  fs.readdirSync("cache");
} catch (e) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", postData(), function (err) {
  if (err) return console.log(err);
  console.log("Posts cached.");
});
