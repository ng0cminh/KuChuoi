import { getAllPost } from "../../lib/posts";
import { postData } from "../../../cache/data";

function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

const posts = process.env.NODE_ENV === "production" ? postData : getAllPost();

export default function search(req, res) {
  let query = req.query.q;
  query = query && removeAccents(query).toLowerCase();

  const results = posts.filter(post => {
    return removeAccents(post.title).toLowerCase().includes(query);
  });

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
}
