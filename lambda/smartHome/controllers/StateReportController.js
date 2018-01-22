const {send, lightCommand, requestType} = require('../http');
const createResponse = require('./ResponseController').createResponse;

/**
 * Handles State Report requests.
 * @param {Object} directive
 * @return {Promise}
 */
exports.stateReportHandler = (request, callback) => {
	const endpointId = request.directive.endpoint.endpointId;

	return send(requestType.GET_LIGHTS, endpointId)
		.then((result) => { //GET_LIGHT wird abgefragt um zu testen, ob tantesnugata antwortet
			return createResponse(request, "OK");
		})
		.catch((err) => {
			return createResponse(request, 'UNREACHABLE'); 
		});
};
