const detailedSchema = mongoose.Schema({
	address: String,
	price: Number,
	body: String,
	details: {
		factsAndFeatures:{
			type: String,
			yearBuilt: Number,
			heating: String,
			cooling: String,
			parking: String,
			lot: Number,
			daysOnZillow: Date,
			pricePerSqft: Number
		},
		interiorFeatures: {
			bedRoom: Number,
			bathRoom: String,
			heatingAndCooling: String,
			basement: String,
			flooring: Number,
			other: String
		},
		spacesAndMenities: {
			size: Number,
			amenities: String,
			spaces: String
		},
		construction:{
			typeAndStyle: String,
			dates: {
				builtIn: Date,
				remodel: Date 
			},
			materials: {
				roof: String,
				exterior: String
			},
			other: String
		},
		exteriorFeatures: {
			lot: {
				lot: Number,
				lotWidth: Number
			}
			other: String
		},
		parking: String,
		other: {
			lastSold: {
				soldDate: Date,
				soldPrice: Number
			}
		},
		activityOnZillow:{
			daysOnZillow: Date,
			pastThirtydayView: Number,
			savedLog: Number
		}
	}
})

module.exports detailedSchema = detailedSchema;