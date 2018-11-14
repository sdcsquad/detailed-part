const faker = require('faker');
const Detail = require('./Detail.js');
// const UserRequest = require('./UserRequest.js');

const dummyData = [];
const randomize = () => ({
  _index: '',
  address: faker.address.streetAddress(),
  price: faker.random.number({ min: 800000, max: 5000000 }),
  body: faker.lorem.paragraphs(),
  subTitle: `${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
  details: {
    factsAndFeatures: {
      type: Math.random() > 0.5 ? 'Single Family' : 'Multi-Family',
      yearBuilt: 1918 + Math.floor(Math.random() * 100),
      heating: Math.random() > 0.5 ? 'Central' : 'None',
      cooling: Math.random() > 0.5 ? 'Central' : 'None',
      parking: `${faker.random.number({ min: 1, max: 6 })} spaces`,
      lot: `${faker.random.number({ min: 1000, max: 10000 })} sqft`,
      daysOnZillow: faker.date.past(),
      pricePerSqft: faker.random.number({ min: 100, max: 1000 }),
      saves: faker.random.number({ min: 70, max: 700 }),
    },
    interiorFeatures: {
      bedRoom: faker.random.number({ min: 1, max: 10 }),
      bathRoom: `${faker.random.number({ min: 1, max: 10 })} full, ${faker.random.number({ min: 1, max: 10 })} half`,
      heatingAndCooling: faker.random.words(),
      basement: faker.random.words(),
      flooring: faker.random.number({ min: 1, max: 10 }),
      other: faker.random.words(),
    },
    spacesAndMenities: {
      size: faker.random.number({ min: 1, max: 10 }),
      amenities: faker.random.words(),
      spaces: `${faker.random.number({ min: 1, max: 6 })} spaces`,
    },
    construction: {
      typeAndStyle: faker.random.words(),
      dates: {
        builtIn: faker.date.past(),
        remodel: faker.date.past(),
      },
      materials: {
        roof: faker.random.words(),
        exterior: faker.random.words(),
      },
      other: faker.random.words(),
    },
    exteriorFeatures: {
      lot: {
        lot: faker.random.number({ min: 1, max: 10 }),
        lotWidth: faker.random.number({ min: 1, max: 10 }),
      },
      other: faker.random.words(),
    },
    parking: faker.random.words(),
    other: {
      lastSold: {
        soldDate: faker.date.past(),
        soldPrice: faker.random.number({ min: 800000, max: 5000000 }),
      },
    },
    activityOnZillow: {
      daysOnZillow: faker.date.past(),
      pastThirtydayView: faker.random.number({ min: 5, max: 50 }),
      savedLog: faker.random.number({ min: 5, max: 50 }),
    },
  },
});

for (let i = 1; i < 102; i += 1) {
  const aRandomObj = randomize();
  aRandomObj._index = i;
  aRandomObj.name = `home${i}`;
  console.log(aRandomObj.name);
  dummyData.push(aRandomObj);
}

const insertDummies = () => (Detail.insertMany(dummyData, () => {
  process.exit();
}));

insertDummies();

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
