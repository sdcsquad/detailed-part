const express = require('express');

const router = express.Router();
const Detail = require('../../db/Detail.js');
const UserRequest = require('../../db/UserRequest.js');


router.get('/:identifier', (req, res) => {
  const { identifier } = req.params;
  if (identifier.includes('home')) {
    Detail.findOne({ name: identifier })
      .then(data => (res.send(data)));
  } else {
    Detail.findOne({ _index: identifier })
      .then(data => (res.send(data)));
  }
});

//create a detail
router.post('', (req, res) => {
  res.end();
  // console.log('POST REQ IS: ', req);
  // UserRequest.insert(req.body)
  //   .then({
  //     res.end();
  //   })
});

//update a detail
router.put('/details/index/:index', (req, res) => {
  res.end();
});

//delete a detail
router.delete('/details/index/:index', (req, res) => {
  res.end();
});

// request
router.post('/user-request', (req, res) => {
  console.log('POST REQ IS: ', req.body);
  const { data } = req.body;
  const eachPhone = Number(data.phone);
  UserRequest.findOne({ phone: eachPhone })
    .then((result) => {
      if (!eachPhone) {
        throw 'Please Fill the Form';
      } else if (!result) {
        UserRequest.create(data)
          .then( (result) => {
            console.log('SEND OK: ', result);
            res.send(result);
          })
        }else{
          throw 'You already made an offer!';
        }
    })
    .catch(err => {
      res.send(err);
    })
    // .then(data => {
    //   return data.map(e => (e.phone))
    // })
    // .then(arr => {
    //   if(!arr.includes(Number(req.body.phone))){
    //     UserRequest.create(data)
    //       .then( res => {
    //         console.log(res);
    //       })
    //   }else{
    //     console.log('Same User Exists');
    //     res.send('Same User Exists');
    //   }
    // })
});

module.exports = router;
