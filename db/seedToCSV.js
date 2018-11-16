const fs = require('fs');
const randomize = require('./randomDataGenerator.js');

const seedToCSV = (fileName, rowsToGenerate) => {
  const stopWatch = Date.now();
  const file = fs.createWriteStream(`./${fileName}.csv`);
  const innerLoopRotations = rowsToGenerate / 100;

  if (rowsToGenerate < 100) {
    throw Error('enter more rows to generate! might as well write them out by hand you lazy bum...');
  }

  const drainingWrite = (writeStream, data) => {
    if (!writeStream.write(data)) {
      return new Promise(resolve => writeStream.once('drain', resolve));
    }
    return true;
  };

  (async () => {
    for (let i = 0; i < 100; i += 1) {
      for (let j = 1; j <= innerLoopRotations; j += 1) {
        const aRandomObj = randomize();
        aRandomObj._index = (innerLoopRotations * i) + j;
        aRandomObj.name = `home${aRandomObj._index}`;
        const res = drainingWrite(file, Object.values(aRandomObj).join('|').concat('\n'));
        if (res instanceof Promise) {
          await res;
        }
      }
      console.log(`${i + 1}%`);
    }
    console.log(`Time to completion: ${(Date.now() - stopWatch) / 60000}`);
  })();
};

seedToCSV('data', 10000000);
