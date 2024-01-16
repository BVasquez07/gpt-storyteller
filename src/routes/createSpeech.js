const fs = require('fs');
const txtToSpeech = require('@google-cloud/text-to-speech');
require('dotenv').config();
const projectId = process.env.PROJ_ID;
const client = new txtToSpeech.TextToSpeechClient({ projectId });
const express = require("express");
const router = express.Router();

// TODO: make it so that when the file is created it is immediately played.

const speak = async () => {
    const text = "Hello, my name is Brandon it's a pleasure to meet you. May I know your name stranger?"
    const speechReqBody = {
        input: {
            text: text
        },
        voice: {
            languageCode: 'en-US', 
            name: "en-US-Journey-F",
            ssmlGender: "FEMALE",
            naturalSampleRateHertz: 24000
        },
        audioConfig: {
            audioEncoding: 'MP3',
            effectsProfileId: ["small-bluetooth-speaker-class-device"],
            pitch: 0,
            speakingRate: 1.05}, 
    }
    client.synthesizeSpeech
    const [response] = await client.synthesizeSpeech(speechReqBody);
    
    console.log(response.audioContent); //output the buffer stream 


    await fs.writeFile('./src/client/public/audio/output.mp3', response.audioContent, {encoding: 'binary'}, (err) => {
        if(err){
            console.log("There was an error")
        }
        else{
            console.log("Audio processed successfully!")
        }
    });
}

speak()
