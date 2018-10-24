module.exports = (app, Details) => {
	//get all details
	app.get('/api/details', (req, res) => {
		res.end();
	})

	//get one detail
	app.get('api/details/:item-id', (req, res) => {
		res.end();
	})

	//create a detail
	app.post('/api/details/', (req, res) => {
		res.end();
	})

	//update a detail
	app.put('/api/details/:item-id', (req, res) => {
		res.end();
	})

	//delete a detail
	app.delete('/api/details/:item-id', (req, res) => {
		res.end();
	})
}
