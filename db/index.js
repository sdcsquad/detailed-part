const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/detailed-part');

const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
	console.log('mongodb')
})

const detailedSchema = require('./schema.js');
let DetailDb = mongoose.model('detailDb', detailedSchema);

module.exports.db = db;