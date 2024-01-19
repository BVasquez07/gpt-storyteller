const Openai = require('openai');
require('dotenv').config()
const openai = new Openai.OpenAI({apiKey: process.env.GPT_KEY});
const express = require("express");
const router = express.Router();
const path = require('path')
const speak = require(path.join(process.cwd(), '/src/utils/createSpeech.js'))


router.get('/', (req, res) => {
    const prompt = Object.values(req.query)
    openai.chat.completions.create({ //create the prompt
        //we could recieve the prompt as a query param
        messages: [{ role: "system", content: prompt[0] || "Why do you believe the gods have abandoned us?" }],
        model: "gpt-3.5-turbo",
    })
    .then(fetched => fetched.choices[0].message.content)
    .then(msg => {
        speak(msg);//convert the text prompt into speech
        res.render('response', {message: msg})
        //res.send(`<h1><center>${msg}</center></h1>`) //instead of doing a send of a simple html we can do the render of a file
    })
    .catch(() => res.send(`<h1><center>There was an error processing your prompt</center></h1>`))
})

module.exports = router
