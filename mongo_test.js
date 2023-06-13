require('./mongoose');
const Blog = require('./models/blog');

const myBlog = {
    name: "testblog",
}

//Blog.create(myBlog);

// works to clear the collection
Blog.deleteMany({}).then(function(){
    console.log("Data deleted"); // Success
}).catch(function(error){
    console.log(error); // Failure
});
