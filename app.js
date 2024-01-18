const express = require('express');
const app = express();
const nodemon = require('nodemon')
const gpt_msg = require('./src/routes/gpt_msg')
const output = require('./src/routes/output')
require('dotenv').config()

const url = {
    host: process.env.SERVER_HOST_DEV,
    port: process.env.SERVER_PORT_DEV
}

app.set('view engine', 'pug'); //setting the view engine

app.get('/', (req, res) => { /*TODO: create simple landing/main interface for user input and hearing of voice https://codepen.io/SitePoint/pen/JRaLVR?html-preprocessor=pug*/
    res.send("<h1><center>initialized GPT model. Ready to be used...</h1></center>");
})

app.use('/output', output);
app.use('/prompt', gpt_msg);

app.listen(url.port, () => {console.log(`App is live at http://${url.host}:${url.port}/`)})
 