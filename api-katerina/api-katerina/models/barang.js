var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var barangSchema = new Schema({
	name : String,
	desc : String,
	price : Number,
	seller : {
		type: Schema.Types.ObjectId,
		ref : 'User'
	},
	paket : {
		type: Schema.Types.ObjectId,
		ref : 'Paket'
	},
	/* info kalau paketnya katering yaitu day1, dst */
	info : {type: Number, default:null}
});

var collection = 'barang';

module.exports = mongoose.model('Barang', barangSchema, collection);
