const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/index.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/homes/', router);
app.use('/homes/:identifier', express.static(path.join(__dirname, '/../client/dist/')));


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('working on ', port);
});
