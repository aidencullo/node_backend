# node_backend

# Description
A basic node backend server connected to a mongo database

# GET

## /blogs
returns all blog docs in testCollection

# POST

## /blog
creates a blog doc in testCollection

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
