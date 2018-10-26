const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/detailed-part';

const db = mongoose.connect(mongoUri);

module.exports = db;