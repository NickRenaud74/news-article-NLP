# News Article Evaluation -NLP

## Description
The News article evaluation project is a single page web application which allows users to enter text into a form that will be analyzed by the MeaningCloud Sentiment Analysis API.  The API is Natural Language Processing API that returns an analysis results object that will be dynamiclly displayed to the user.

Technologies used include:
* Webpack for module bundling
* Javascript, HTML, CSS/Sass
* Node/Express for server side functionality
* NPM
* Jest for unit testing

### Setup
1. To install project dependencies run `npm install` in the CLI.
2. Create a developer account on https://www.meaningcloud.com/ to access an API key.
3. Create a .env file to store API key `apiKey = <Your API key> `
4. In the CLI use:
    * `npm run build-dev` to run app in development mode.
    * `npm run build-prod` to run app in production mode.
    * `npm run start` to start the server.
    * `npm run test` to run unit tests.
5. In your browser navigate to http://localhost:8080/ to view app.


#### Sources
/images/robot-icon.jpg  /images/robot-icon-main.jpg - https://icons8.com/icons/set/robot