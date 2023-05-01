# node_backend

# Description
A basic node backend server connected to a mongo database

# Server
runs on http://localhost:8000

# GET

## /blogs
returns all blog docs in testCollection

## /blogs/[blog_id]
returns blog with id == blog_id in testCollection

# POST

## /blog
creates a blog doc in testCollection

# PATCH

## /blogs/[blog_id]
patchs blog with id == blog_id in testCollection

# DELETE

## /blogs/[blog_id]
deletes blog with id == blog_id in testCollection

# Data
## Blog
```json
{
    title: String,
    subTitle: String,
    description: String
}
```

## DB
testCollection
mongodb://localhost:27017/testCollection

# Install
`npm i`

# Run
`npm run dev`
