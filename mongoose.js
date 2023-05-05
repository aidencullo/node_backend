const mongoose = require("mongoose");

const MONGODB_URI = 'mongodb://localhost:27017/aidensDB';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection to mongodb successful");
}).catch((error) => {
    console.error(error);
})
