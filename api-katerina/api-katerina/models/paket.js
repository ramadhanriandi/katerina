var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paketSchema = new Schema({
	name : String,
});

var collection = 'paket';

module.exports = mongoose.model('Paket', paketSchema, collection);
