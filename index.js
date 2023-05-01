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

// GETS
app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/params/:param', (req, res) => {
    res.send("test param passed " + req.params.param);
})

// retrieve all blog
app.get('/blogs', (req, res) => {
    Blog.find({}).then((blogs) => {
	res.status(201).send(blogs);
    }).catch((error) => {
	res.status(500).send(error);
    })
})

// retrieve specific blog
app.get('/blogs/:id', (req, res) => {

    Blog.findById(req.params.id).then((blog) => {
	if (!blog) {
	    return res.status(404).send();
	}
	res.status(200).send(blog);
    }).catch((error) => {
	res.status(500).send(error);
    })

})

// replace specific blog
app.patch('/blogs/:id', (req, res) => {

    Blog.findByIdAndUpdate(req.params.id, req.body, {
	new: true
    }).then((blog) => {
	if (!blog) {
	    return res.status(404).send();
	}
	res.status(200).send(blog);
    }).catch((error) => {
	res.status(500).send(error);
    })

})

// POSTS

// create blog doc
app.post('/blog', (req, res) => {
    Blog.create(req.body).then((blog) => {
	res.status(201).send(blog);
    }).catch((error) => {
	res.status(400).send(error);
    })
})

