const fs = require('fs');
const randomize = require('./randomDataGenerator.js');

const headers = [
  '_index',
  'name',
  'address',
  'price',
  'body',
  'subTitle',
  'ff_type',
  'ff_yearBuilt',
  'ff_heating',
  'ff_cooling',
  'ff_parking',
  'ff_lot',
  'ff_daysOnZillow',
  'ff_pricePerSqft',
  'ff_saves',
  'if_bedRoom',
  'if_bathRoom',
  'if_heatingAndCooling',
  'if_basement',
  'if_flooring',
  'if_other',
  'sm_size',
  'sm_amenities',
  'sm_spaces',
  'c_typeAndStyle',
  'c_d_builtIn',
  'c_d_remodel',
  'c_m_roof',
  'c_m_exterior',
  'c_other',
  'ef_l_lot',
  'ef_l_lotWidth',
  'ef_other',
  'parking',
  'o_l_soldDate',
  'o_l_soldPrice',
  'a_daysOnZillow',
  'a_pastThirtydayView',
  'a_savedLog',
];

const file = fs.createWriteStream('./dataHouz.csv');

function drainingWrite(fileName, data) {
  if (!fileName.write(data)) {
    return new Promise(resolve => fileName.once('drain', resolve));
  }
  return true;
}

const countObj = {};
for (let i = 0; i < headers.length; i += 1) {
  if (countObj[headers[i]] === undefined) {
    countObj[headers[i]] = 0;
  }
}

(async () => {
  const t0 = Date.now();
  for (let i = 0; i < 100; i += 1) {
    for (let j = 1; j <= 100000; j += 1) {
      const aRandomObj = randomize();
      aRandomObj._index = (1000 * i) + j;
      aRandomObj.name = `home${i * j}`;
      const res = drainingWrite(file, Object.values(aRandomObj).join('|').concat('\n'));
      if (res instanceof Promise) {
        await res;
      }
    }
    console.log(`${i + 1}% --- ${(Date.now() - t0) / 1000}`);
  }
  console.log('great success!');
})();

// --------------------------- EXTRA COMPONENT ------------------------------//
//
// const UserRequest = require('./UserRequest.js');
// const firstBuyers = [
//   {
//     name: faker.random.words(),
//     phone: faker.random.number({ min: 800000, max: 5000000 }),
//     mail: faker.random.words(),
//     timeStamp: faker.date.past(),
//   },
//   {
//     name: faker.random.words(),
//     phone: faker.random.number({ min: 800000, max: 5000000 }),
//     mail: faker.random.words(),
//     timeStamp: faker.date.past(),
//   }
// ]


// const insertDummyBuyer = () => {
//   return UserRequest.insertMany(firstBuyers);
// }

// insertDummyBuyer();
