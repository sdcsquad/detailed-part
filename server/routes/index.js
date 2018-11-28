require('newrelic');
const express = require('express');
const db = require('../../db/index.js');

const router = express.Router();

const queryIdOrName = (req) => {
  const { homeIdentifier } = req.params;
  if (homeIdentifier.includes('home')) {
    return { table: 'details_by_name', criteria: `name = '${homeIdentifier}'` };
  }
  return { table: 'details', criteria: `id = ${homeIdentifier}` };
};

router.get('/:homeIdentifier', (req, res) => {
  const params = queryIdOrName(req);
  const query = `SELECT * FROM ${params.table} WHERE ${params.criteria}`;
  db.execute(query)
    .then((data) => {
      res.send(data.rows[0]);
    })
    .catch(err => (console.log(err)));
});

router.post('/', (req, res) => {
  const query = `INSERT INTO details (id, name, price) VALUES ${req.body}`;
  db.execute(query)
    .then(() => (res.end()));
});

router.put('/:homeIdentifier', (req, res) => {
  const params = queryIdOrName(req);
  const query = `UPDATE details SET ${Object.keys(req.body)} = ${Object.values(req.body)} WHERE ${params.criteria}`;
  db.execute(query)
    .then(() => (res.end()));
});

router.patch('/:homeIdentifier', (req, res) => {
  const params = queryIdOrName(req);
  const query = `UPDATE details SET ${Object.keys(req.body)} = ${Object.values(req.body)} WHERE ${params.criteria}`;
  db.execute(query)
    .then(() => (res.end()));
});

router.delete('/:homeIdentifier', (req, res) => {
  const params = queryIdOrName(req);
  const query = `DELETE FROM details WHERE ${params.criteria}`;
  db.execute(query)
    .then(() => (res.end()));
});

// --------------------------- EXTRA COMPONENT ------------------------------//

// const UserRequest = require('../../db/UserRequest.js');
//
// router.post('/user-request', (req, res) => {
//   console.log('POST REQ IS: ', req.body);
//   const { data } = req.body;
//   const eachPhone = Number(data.phone);
//   UserRequest.findOne({ phone: eachPhone })
//     .then((result) => {
//       if (!eachPhone) {
//         throw 'Please Fill the Form';
//       } else if (!result) {
//         UserRequest.create(data)
//           .then( (result) => {
//             console.log('SEND OK: ', result);
//             res.send(result);
//           })
//         }else{
//           throw 'You already made an offer!';
//         }
//     })
//     .catch(err => {
//       res.send(err);
//     })
//     .then(data => {
//       return data.map(e => (e.phone))
//     })
//     .then(arr => {
//       if(!arr.includes(Number(req.body.phone))){
//         UserRequest.create(data)
//           .then( res => {
//             console.log(res);
//           })
//       }else{
//         console.log('Same User Exists');
//         res.send('Same User Exists');
//       }
//     })
// });

module.exports = router;
