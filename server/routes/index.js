const express = require('express');
const router = express.Router();
const db = require('../../db');

//get all details
router.get('/details', (req, res) => {
	db.collection('detailDb').find({})
		.then(data => {
			res.send(data);
		})
})

//get one detail
router.get('/details/:item-id', (req, res) => {
	db.collection('detailDb').findOne({_id: req.params.id})
		.then(data => {
			res.send(data);
		})
})

//create a detail
router.post('/details', (req, res) => {
	res.end();
})

//update a detail
router.put('/details/:item-id', (req, res) => {
	res.end();
})

//delete a detail
router.delete('/details/:item-id', (req, res) => {
	res.end();
})


module.exports = router;