import { getAllPost } from '../../lib/posts';

const posts = process.env.NODE_ENV === 'production' ? require('../../cache/data').posts : getAllPost()

export default function search (req, res) {
    const results = req.query.q ? posts.filter(post => post.title.toLowerCase().includes(req.query.q)) : []
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ results }))
}