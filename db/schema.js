const mongoose = require('mongoose');
const detailedSchema = new mongoose.Schema({
	//idx: {type: Number, index: true, unique: true},
	address: {type: String, unique: true},
	price: {type: Number},
	body: {type: String},
	details: {
		factsAndFeatures:{
			type: {type: String},
			yearBuilt: {type: Date},
			heating: {type: String},
			cooling: {type: String},
			parking: {type: String},
			lot: {type: Number},
			daysOnZillow: {type: Date},
			pricePerSqft: {type: Number}
		},
		interiorFeatures:{
			bedRoom: {type: Number},
			bathRoom: {type: String},
			heatingAndCooling: {type: String},
			basement: {type: String},
			flooring: {type: Number},
			other: {type: String}
		},
		spacesAndMenities:{
			size: {type: Number},
			amenities: {type: String},
			spaces: {type: String}
		},
		construction:{
			typeAndStyle: {type: String},
			dates:{type:  }{
				builtIn: {type: Date},
				remodel: {type: Date} 
			},
			materials:{
				roof: {type: String},
				exterior: {type: String}
			},
			other: {type: String}
		},
		exteriorFeatures:{
			lot:{type:  }{
				lot: {type: Number},
				lotWidth: {type: Number}
			},
			other: {type: String}
		},
		parking: {type: String},
		other:{
			lastSold:{
				soldDate: {type: Date},
				soldPrice: {type: Number}
			}
		},
		activityOnZillow:{
			daysOnZillow: {type: Date},
			pastThirtydayView: {type: Number},
			savedLog: {type: Number}
		}
	}
})

module.exports = detailedSchema;