const Detail = require('./Detail.js');

const dropAll = () => (Detail.remove({}, () => {
  console.log('Details table dropped');
  process.exit();
}));

dropAll();
