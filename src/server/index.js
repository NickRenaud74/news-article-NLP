const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

// require dotenv to access envrionment variables
const dotenv = require('dotenv');
dotenv.config();

const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1';
const apiKey = process.env.apiKey;

// creating an instance of express
const app = express()
app.use(cors())
    // to use json
app.use(bodyParser.json())
    // to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})

app.get('/test', (req, res) => {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8080, () => {
    console.log('NLP listening on port 8080!');
})

//GET request to Meaning Cloud API
const getSentiment = async(req, res) => {
    const txt = req.body.userInput;
    const response = await fetch(`${baseUrl}?key=${apiKey}&of=json&txt=${txt}&lang=en`);
    try {
        const sentimentData = await response.json();
        console.log(sentimentData);
        res.send(sentimentData);
    } catch (error) {
        console.log(error);
    };
};

app.post('/api', getSentiment);