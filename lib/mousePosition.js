var mongoose = require('mongoose');

var mousePositionSchema = mongoose.Schema({
	screenPositionX: Number,
	screenPositionY: Number,
	mousePositionX: Number,
	mousePositionY: Number,
	recordedOn: Date,
	sessionId: String
});

var MousePosition = mongoose.model('MousePosition', mousePositionSchema);

module.exports = {
	create : function(screenX, screenY, mouseX, mouseY, sessionId) {
		var position = new MousePosition({ 
			screenPositionX: screenX,
			screenPositionY: screenY,
			mousePositionX: mouseX,
			mousePositionY: mouseY,
			sessionId: sessionId,
			recordedOn: new Date()
		});

		position.save(function(err) {
			if (err) {
				console.log('There was a problem saving the mouse position.');
			}
		});
	}
};