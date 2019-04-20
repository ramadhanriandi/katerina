var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var langgananSchema = new Schema({
	desc : String,
	price : Number,
	seller : {
		type: Schema.Types.ObjectId,
		ref : 'User'
	},
	days : [{
			pagi : [{type: Schema.Types.ObjectId, ref:'Barang'}],
			siang : [{type: Schema.Types.ObjectId, ref:'Barang'}],
			malam : [{type: Schema.Types.ObjectId, ref:'Barang'}]
		}]
});

var collection = 'langganan';

module.exports = mongoose.model('Langganan', langgananSchema, collection);
