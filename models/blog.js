const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name: String,
});

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;
