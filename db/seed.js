const faker = require('faker');
const fs = require('fs');
// const csvWriter = require('csv-write-stream');
// const Promise = require('bluebird');

// const Detail = require('./Detail.js');

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

const randomize = () => ({
  _index: '',
  name: '',
  address: faker.address.streetAddress(),
  price: faker.random.number({ min: 800000, max: 5000000 }),
  body: faker.lorem.paragraph(),
  subTitle: `${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
  ff_type: Math.random() > 0.5 ? 'Single Family' : 'Multi-Family',
  ff_yearBuilt: 1918 + Math.floor(Math.random() * 100),
  ff_heating: Math.random() > 0.5 ? 'Central' : 'None',
  ff_cooling: Math.random() > 0.5 ? 'Central' : 'None',
  ff_parking: `${faker.random.number({ min: 1, max: 6 })} spaces`,
  ff_lot: `${faker.random.number({ min: 1000, max: 10000 })} sqft`,
  ff_daysOnZillow: `${faker.date.past()}`,
  ff_pricePerSqft: faker.random.number({ min: 100, max: 1000 }),
  ff_saves: faker.random.number({ min: 70, max: 700 }),
  if_bedRoom: faker.random.number({ min: 1, max: 10 }),
  if_bathRoom: `${faker.random.number({ min: 1, max: 10 })} full, ${faker.random.number({ min: 1, max: 10 })} half`,
  if_heatingAndCooling: faker.random.words(),
  if_basement: faker.random.words(),
  if_flooring: faker.random.number({ min: 1, max: 10 }),
  if_other: faker.random.words(),
  sm_size: faker.random.number({ min: 1, max: 10 }),
  sm_amenities: faker.random.words(),
  sm_spaces: `${faker.random.number({ min: 1, max: 6 })} space`,
  c_typeAndStyle: faker.random.words(),
  c_d_builtIn: `${faker.date.past()}`,
  c_d_remodel: `${faker.date.past()}`,
  c_m_roof: faker.random.words(),
  c_m_exterior: faker.random.words(),
  c_other: faker.random.words(),
  ef_l_lot: faker.random.number({ min: 1, max: 10 }),
  ef_l_lotWidth: faker.random.number({ min: 1, max: 10 }),
  ef_other: faker.random.words(),
  parking: faker.random.words(),
  o_l_soldDate: `${faker.date.past()}`,
  o_l_soldPrice: faker.random.number({ min: 800000, max: 5000000 }),
  a_daysOnZillow: `${faker.date.past()}`,
  a_pastThirtydayView: faker.random.number({ min: 5, max: 50 }),
  a_savedLog: faker.random.number({ min: 5, max: 50 }),
});

//  ---------------- Find out data shape and sizes -------------------//
// const countObj = {};
// for (let i = 0; i < headers.length; i += 1) {
//   if (countObj[headers[i]] === undefined) {
//     countObj[headers[i]] = 0;
//   }
// }
// for (let i = 1; i < 2; i += 1) {
//   for (let j = 1; j < 100000; j += 1) {
//     const aRandomObj = randomize();
//     aRandomObj._index = `${i * j}`;
//     aRandomObj.name = `home${i * j}`;
//     for (key in aRandomObj) {
//       if (countObj[key] < aRandomObj[key].toString().length) {
//         countObj[key] = aRandomObj[key].toString().length
//       }
//     }
//   }
// }
// console.log(countObj);

const file = fs.createWriteStream('./dataHouz.csv');
// file.write(`${headers.join('|')}\n`);

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
