const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
import fs from 'fs';


const days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"] 
app.get('/',(req,res)=>{
    var today = new Date()
    var day = days[today.getDay()]

    res.send("<h1>"+day+"</h1>")    
});

app.listen(3000,()=>{
    console.log("Server started on port 3000")    
});

app.get('/play-audio', (req, res) => {
    const audioFilePath = path.join(__dirname, 'Tink.aiff');
    const audioStream = fs.createReadStream(audioFilePath);
    res.set('Content-Type', 'audio/aiff');
    audioStream.pipe(res);
});