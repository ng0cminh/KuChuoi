import remark from "remark";
import html from "remark-html";
import toc from "markdown-toc";

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
