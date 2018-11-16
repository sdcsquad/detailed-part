const fs = require('fs');
const randomize = require('./randomDataGenerator.js');

const file = fs.createWriteStream('./dataHouz2.csv');

function drainingWrite(fileName, data) {
  if (!fileName.write(data)) {
    return new Promise(resolve => fileName.once('drain', resolve));
  }
  return true;
}

(async () => {
  const stopWatch = Date.now();
  for (let i = 0; i < 100; i += 1) {
    for (let j = 1; j <= 100000; j += 1) {
      const aRandomObj = randomize();
      aRandomObj._index = (1000 * i) + j;
      aRandomObj.name = `home${aRandomObj._index}`;
      const res = drainingWrite(file, Object.values(aRandomObj).join('|').concat('\n'));
      if (res instanceof Promise) {
        await res;
      }
    }
    console.log(`${i + 1}% --- ${(Date.now() - stopWatch) / 1000}`);
  }
  console.log('great success!');
})();
