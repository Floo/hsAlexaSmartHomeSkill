const {send, requestType} = require('../http');
const createResponse = require('./ResponseController').createResponse;

/**
 * Handles Power requests.
 * @param {Object} directive
 * @return {Promise}
 */
exports.playbackHandler = (request, callback) => {
	const endpointId = request.directive.endpoint.endpointId;
	
	let cmd = 'set ';
	cmd += request.directive.header.name.toLowerCase();

	return send(requestType.SET_ENTERTAIN, endpointId, cmd).then((result) => { 
		return createResponse(request, result); 
	});
};