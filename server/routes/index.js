const express = require('express');
const Detail = require('../../db/Detail.js');

const router = express.Router();

const queryIdOrName = (req) => {
  const { homeIdentifier } = req.params;
  if (homeIdentifier.includes('home')) {
    return { name: homeIdentifier };
  }
  return { _index: homeIdentifier };
};

router.get('/:homeIdentifier', (req, res) => {
  Detail.findOne(queryIdOrName(req))
    .then(data => (res.send(data)));
});

router.post('/', (req, res) => {
  Detail.create(req.body)
    .then(() => (res.end()));
});

router.put('/:homeIdentifier', (req, res) => {
  Detail.findOneAndUpdate(queryIdOrName(req), req.body)
    .then(() => (res.end()));
});

router.patch('/:homeIdentifier', (req, res) => {
  Detail.findOneAndUpdate(queryIdOrName(req), req.body)
    .then(() => (res.end()));
});

router.delete('/:homeIdentifier', (req, res) => {
  Detail.deleteOne(queryIdOrName(req))
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
