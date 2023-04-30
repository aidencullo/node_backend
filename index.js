require('./mongoose');
const express = require("express");
const app = express();
const Blog = require('./models/blog');
 
app.listen(8000, () => {
    console.log('listening on port 8000');
})

// middleware

app.use(express.json());

// Routing

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/params/:param', (req, res) => {
    res.send("test param passed " + req.params.param);
})

// HTTP Posts

// create blog doc
app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save().then((blog) => {
	res.status(201).send(blog);
    }).catch((error) => {
	res.status(404).send(error);
    })
})
