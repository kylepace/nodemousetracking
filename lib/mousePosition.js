var mongoose = require('mongoose');

var mousePositionSchema = mongoose.Schema({
	screenPositionX: Number,
	screenPositionY: Number,
	mousePositionX: Number,
	mousePositionY: Number,
	recordedOn: Date,
	sessionId: String
});