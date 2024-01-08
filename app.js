const express = require('express');
const app = express();
const nodemon = require('nodemon')
const test = require('./src/routes/test')
const openai = new OpenAI();
require('dotenv').config()

const url = {
    host: "localhost",
    port: '3100'
}


app.get('/', (req, res) => {
    res.send("<h1><center>initialized GPT model. Ready to be used...</h1></center>");
})


app.listen(url.port, () => {console.log(`App is live at http://${url.host}:${url.port}/`)})
