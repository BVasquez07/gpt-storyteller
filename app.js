const express = require('express');
const app = express();
const nodemon = require('nodemon')
const gpt_msg = require('./src/routes/gpt_msg')
const output = require('./src/routes/output')
require('dotenv').config()

const url = {
    host: "localhost",
    port: '3100'
}

app.set('view engine', 'pug'); //setting the view engine

app.get('/', (req, res) => {
    res.send("<h1><center>initialized GPT model. Ready to be used...</h1></center>");
})

app.use('/output', output);

app.listen(url.port, () => {console.log(`App is live at http://${url.host}:${url.port}/`)})
 