const { readFile } = require('fs').promises;
const express = require('express');

const app = express();

app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );
    
});

app.listen(process.env.PORT || 3000, () => console.log(`App available on https://localhost:3000`));

app.use(express.static(__dirname + '/img/'));

