const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')

// require dotenv to access envrionment variables
const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.apiKey

const json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

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

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function(req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
    console.log('NLP listening on port 8080!');
})