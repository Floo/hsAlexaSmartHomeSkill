const {send, requestType} = require('../http');
const createResponse = require('./ResponseController').createResponse;

/**
 * Handles Power requests.
 * @param {Object} directive
 * @return {Promise}
 */
exports.stepSpeakerHandler = (request, callback) => {
	const endpointId = request.directive.endpoint.endpointId;
	var cmd = '';
	var device = '';
	
	if (request.directive.header.name === "AdjustVolume") {
		let volumeDelta = request.directive.payload.volumeSteps;
	};
	
	if (!volumeDelta) {
		cmd = 'set ${endpointId} mute';
	} else {
		if (volumeDelta > 0) {
			cmd = 'set ${endpointId} vol+';
		} else {
			cmd = 'set ${endpointId} vol-';
		}
	};

	return send(requestType.SET_ENTERTAIN, endpointId, cmd, (!volumeDelta ? null : volumeDelta)).then((result) => { 
		return createResponse(request, result); 
	});
};