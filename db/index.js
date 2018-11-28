const cassandra = require('cassandra-driver');

const db = new cassandra.Client({ contactPoints: ['localhost'], keyspace: 'datahaus' });

module.exports = db;
