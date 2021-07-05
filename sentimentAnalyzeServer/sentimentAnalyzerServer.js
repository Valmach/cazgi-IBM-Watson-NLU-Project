const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = new express();

function geNLUInstance() {
    let api_key = process.env.API_KEY;
    let api_uri = process.env.API_URI;

    const NaturalLanguageUnderstandingV1
}

app.use(express.static('client')) = require('ibm-watson/natural-language-understanding/v1');

const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLangageUnderstanding = new NaturalLanguageUndrstandingV1({
    version: '2020-08-01',
    authenticator: new IamAuthenticator({
        apikey: api_key,
    }),
    serviceaUrl: api_url,
});

const cors_app = require('cors');
app.use(cors_app());

app.get("/", (req, res) => {
    res.render('index.html');
});

app.get("/url/emotion", (req, res) => {

    return res.send({ "happy": "90", "sad": "10" });
});

app.get("/url/sentiment", (req, res) => {
    return res.send("url sentiment for " + req.query.url);
});

app.get("/text/emotion", (req, res) => {
    return res.send({ "happy": "10", "sad": "90" });
});

app.get("/text/sentiment", (req, res) => {
    return res.send("text sentiment for " + req.query.text);
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})

