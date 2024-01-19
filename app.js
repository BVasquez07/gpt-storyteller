const express = require('express');
const app = express();
const nodemon = require('nodemon')
const gpt_msg = require('./src/routes/gpt_msg')
const output = require('./src/routes/output')
require('dotenv').config()
const path = require('path')



/*


TODO:
set public directory as static

*/

const url = {
    host: process.env.SERVER_HOST_DEV,
    port: process.env.SERVER_PORT_DEV
}


app.set('views', path.join(process.cwd(), './src/client/views')) //set the location of the views folder
app.set('view engine', 'pug'); //setting the view engine


app.get('/', (req, res) => { 
    res.render('index', {promptRoute: '/prompt'});
})

app.use(express.static('public'))
app.use('/output', output);
app.use('/prompt', gpt_msg);

app.listen(url.port, () => {console.log(`App is live at http://${url.host}:${url.port}/`)})
 