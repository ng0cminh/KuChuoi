import markdownIt from "markdown-it";

export default async function markdownToHtml(markdown) {
  const md = markdownIt();
  const result = md.render(markdown);

  return result.toString();
}
