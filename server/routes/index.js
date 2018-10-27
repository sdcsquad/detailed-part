const express = require('express');
const router = express.Router();
// const db = require('../../db');
const Detail = require('../../db/Detail.js');

//get all details
router.get('/details', (req, res) => {
  Detail.find({})
    .then(data => {
      res.send(data);
    });
});

//get one detail
router.get('/details/index/:index', (req, res) => {
  console.log(req.params);
  Detail.findOne({_index: req.params.index})
    .then(data => {
      res.send(data);
    });
});

//create a detail
router.post('/details', (req, res) => {
  res.end();
});

//update a detail
router.put('/details/index/:index', (req, res) => {
  res.end();
});

//delete a detail
router.delete('/details/index/:index', (req, res) => {
  res.end();
});


module.exports = router;