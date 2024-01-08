const Openai = require('openai');
require('dotenv').config()
const openai = new Openai.OpenAI({apiKey: process.env.GPT_KEY});


openai.chat.completions.create({
    messages: [{ role: "system", content: "Tell me a funny joke" }],
    model: "gpt-3.5-turbo",
})
    .then(res => console.log(res.choices[0].message))
    
