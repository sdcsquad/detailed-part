module.exports = (app) => {
	app.get('/api/details', (req, res) => {
		res.end();
	})

	app.get('api/details/:item-id', (req, res) => {
		res.end();
	})
}
