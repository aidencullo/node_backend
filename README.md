# node_backend

# GET

## /blogs
returns all blog docs in db

# POST

## /blogs
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
called testCollection
mongodb://localhost:27017/testCollection
