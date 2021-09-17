import { getAllPost } from '../../lib/posts';
import { postData } from '../../../cache/data';

const posts = process.env.NODE_ENV === 'production' ? postData : getAllPost()

export default function search (req, res) {
    const results = req.query.q ? posts.filter(post => post.title.toLowerCase().includes(req.query.q)) : []
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ results }))
}