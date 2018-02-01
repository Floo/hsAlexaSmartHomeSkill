const {send, lightCommand, requestType} = require('../http');
const createResponse = require('./ResponseController').createResponse;
const createErrorResponse = require('./ResponseController').createErrorResponse;

/**
 * Handles Power requests.
 * @param {Object} directive
 * @return {Promise}
 */
exports.powerHandler = (request, callback) => {
	const endpointId = request.directive.endpoint.endpointId;
	const correlationToken = request.directive.header.correlationToken;
	var value = '';
	var reqType = ''; 

	if (endpointId === "tv" || endpointId === "raspiDAC") {
		if (request.directive.header.name === 'TurnOff') {
			value = 'set standby';
			reqType = requestType.SET_ENTERTAIN;
		} else {
			return Promise.reject('NOT_AVAILABLE');
		};
	} else if (endpointId === "pm8000") {
		if (request.directive.header.name === 'TurnOff') {
			value = 'set pm8000 standby';
			reqType = requestType.SET_ENTERTAIN;
		} else {
			return Promise.reject('NOT_AVAILABLE')
		};
	} else {
		value = request.directive.header.name === 'TurnOn' ? lightCommand.FS20_AN : lightCommand.FS20_AUS;
		reqType = requestType.SET_LIGHT;
	}

	return send(reqType, endpointId, value).then((result) => { 
		return createResponse(request, result); 
	});
};
