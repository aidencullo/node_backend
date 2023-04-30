const express = require("express");
const mongoose = require("mongoose");
const app = express();

const MONGODB_URI = 'mongodb://localhost:27017/testCollection';

async function connect() {
    try {
	await mongoose.connect(MONGODB_URI);
	console.log("connected to MongoDB");
    } catch (error) {
	console.error(error);
    }
}

connect();

app.listen(8000, () => {
    console.log('listening on port 8000');
})
