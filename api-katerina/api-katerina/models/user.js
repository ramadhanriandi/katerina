var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name : String,
	distance : Number
})

module.exports = mongoose.model('User', userSchema);
