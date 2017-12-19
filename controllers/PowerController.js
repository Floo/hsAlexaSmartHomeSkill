const {send, lightCommand, requestType} = require('../http');
const createResponse = require('./ResponseController').createResponse;

/**
 * Handles Power requests.
 * @param {Object} directive
 * @return {Promise}
 */
exports.powerHandler = (request, callback) => {
	const endpointId = request.directive.endpoint.endpointId;

	const value = request.directive.header.name === 'TurnOn' ? lightCommand.FS20_AN : lightCommand.FS20_AUS;

	return send(requestType.SET_LIGHT, endpointId, value).then((result) => { 
		return createResponse(request, result); 
	});
};
