const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes')(app, Details);
const db = require('../db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log('working on ', port);
})