const {send, requestType} = require('../http');
const createResponse = require('./ResponseController').createResponse;

/**
 * Handles Power requests.
 * @param {Object} directive
 * @return {Promise}
 */
exports.speakerHandler = (request, callback) => {
	const endpointId = request.directive.endpoint.endpointId;
	var cmd = '';
	var device = '';
	
	if (request.directive.header.name === "AdjustVolume") {
        let volumeDelta = request.directive.payload.volume;
        if (request.directive.payload.volumeDefault) {
            volumeDelta = Math.sign(volumeDelta) * 2; //Defaultwert für Lautstäreänderung für "lauter" oder "leiser" ohne Zahlenwert
        } 
        if (volumeDelta < 0) {
            cmd = `set ${endpointId} vol${volumeDelta}`;     
        } else {
            cmd = `set ${endpointId} vol+${volumeDelta}`;
        }
    } else if (request.directive.header.name === "SetVolume") {
        let volume = request.directive.payload.volume;
        cmd = `set ${endpointId} vol${volume}`;
    } else if (request.directive.header.name == "SetMute") {
        request.directive.payload.mute ? cmd = `set ${endpointId} mute` : cmd = `set ${endpointId} unmute`;
    };
	
	return send(requestType.SET_ENTERTAIN, endpointId, cmd).then((result) => { 
		return createResponse(request, result); 
	});
};