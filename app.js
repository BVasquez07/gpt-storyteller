const express = require('express');
const app = express();
const nodemon = require('nodemon')
const gpt_msg = require('./src/routes/gpt_msg')
const output = require('./src/routes/output')
const fs = require('fs')
require('dotenv').config()
const txtToSpeech = require('@google-cloud/text-to-speech')

const client = new txtToSpeech.TextToSpeechClient();

const speak = async () => {
    const text = "Hello, my name is Brandon Vasquez! It's a pleasure to meet you."
    const speechReqBody = {
        input: {
            text: text
        },
        voice: {
            languageCode: 'en-US', ssmlGender: 'NEUTRAL'
        },
        audioConfig: {audioEncoding: 'MP3'},
    }
    const [response] = await client.synthesizeSpeech(speechReqBody);
    console.log("created some audio");
    await fs.writeFile('./src/client/public/output.mp3', response, 'binary');
}




const url = {
    host: "localhost",
    port: '3100'
}

app.set('view engine', 'pug'); //setting the view engine

app.get('/', (req, res) => {
    res.send("<h1><center>initialized GPT model. Ready to be used...</h1></center>");
})

app.use('/output', speak);

app.listen(url.port, () => {console.log(`App is live at http://${url.host}:${url.port}/`)})
 