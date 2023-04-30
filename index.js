const { readFile } = require('fs').promises;
const express = require('express');
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/testCollection';

mongoose.connect(MONGODB_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

const contactSchema = {
   email: String,
   query: String,
};

const Contact = mongoose.model("Contact", contactSchema);

const app = express();

app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );
    
});

app.post("/contact", function (req, res) {
   const contact = new Contact({
       email: req.body.email,
       query: req.body.query,
   });
   contact.save(function (err) {
       if (err) {
           res.redirect("/error");
       } else {
           res.redirect("/thank-you");
       }
   });
});

app.listen(process.env.PORT || 3000, () => console.log(`App available on https://localhost:3000`));

app.use(express.static(__dirname + '/img/'));

