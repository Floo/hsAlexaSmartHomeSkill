const {send, lightCommand, requestType} = require('../http');
const createResponse = require('./ResponseController').createResponse;

/**
 * Handles Power requests.
 * @param {Object} directive
 * @return {Promise}
 */
exports.powerHandler = (request, callback) => {
	const endpointId = request.directive.endpoint.endpointId;
	var value = '';

	if (endpointId === "tv" || endpointId === "raspiDAC") {
		if (request.directive.header.name === 'TurnOff') {
			value = 'set standby';
		}
	} else if (endpointId === "pm8000") {
		value = 'set pm8000 standby';
	} else {
		value = request.directive.header.name === 'TurnOn' ? lightCommand.FS20_AN : lightCommand.FS20_AUS;
	}

	return send(requestType.SET_LIGHT, endpointId, value).then((result) => { 
		return createResponse(request, result); 
	});
};
