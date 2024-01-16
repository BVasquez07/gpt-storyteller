const fs = require('fs');
const txtToSpeech = require('@google-cloud/text-to-speech');
require('dotenv').config();
const projectId = process.env.PROJ_ID;

const client = new txtToSpeech.TextToSpeechClient({ projectId })


const speak = async () => {
    const text = "Hello, my name is Brandon Vasquez! It's a pleasure to meet you."
    const speechReqBody = {
        input: {
            text: text
        },
        voice: {
            languageCode: 'en-US', ssmlGender: 'NEUTRAL'
        },
        audioConfig: {
            audioEncoding: 'MP3',
            effectsProfileId: ["small-bluetooth-speaker-class-device"],
            pitch: 0,
            speakingRate: 1.13}, 
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
