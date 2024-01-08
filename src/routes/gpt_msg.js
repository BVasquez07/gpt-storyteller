const Openai = require('openai');
require('dotenv').config()
const openai = new Openai.OpenAI({apiKey: process.env.GPT_KEY});
const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    openai.chat.completions.create({ //create the prompt
        //we could recieve the prompt as a query param
        messages: [{ role: "system", content: "Tell me a short story joke" }],
        model: "gpt-3.5-turbo",
    })
    .then(fetched => console.log(fetched.choices[0].message))
    .then(msg => res.send(msg))     
})

module.exports = router
