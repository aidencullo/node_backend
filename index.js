require('./mongoose');
const express = require("express");
const app = express();
const Blog = require('./models/blog');
var bodyParser = require('body-parser')
 
app.listen(8000, () => {
    console.log('listening on port 8000');
})

// middleware

app.use(express.json());
// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// Routing

// GET

// home screen
app.get('/test', (req, res) => {
    res.sendFile('./form.html', {root: __dirname })

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

// PATCH

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

// post from home.html
app.post('/test', (req, res) => {
    console.log(req.body)
    res.send(req.body);
})

// DELETE

// replace specific blog
app.delete('/blogs/:id', (req, res) => {
    Blog.findByIdAndDelete(req.params.id).then((blog) => {
	if (!blog) {
	    return res.status(404).send();
	}
	res.status(200).send(blog);
    }).catch((error) => {
	res.status(500).send(error);
    })
})
