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
	var volumeDelta = 1;
	
	if (request.directive.header.name === "AdjustVolume") {
		volumeDelta = request.directive.payload.volumeSteps;

        if (volumeDelta < 0) {
            cmd = `set ${endpointId} vol-`;     
        } else {
            cmd = `set ${endpointId} vol+`;
        }
	} else if (request.directive.header.name === "SetMute") {
		cmd = `set ${endpointId} mute`;
	};
	volumeDelta = Math.abs(volumeDelta);	

	return send(requestType.SET_ENTERTAIN, endpointId, cmd, (volumeDelta < 2 ? null : volumeDelta)).then((result) => { 
		return createResponse(request, result); 
	});
};