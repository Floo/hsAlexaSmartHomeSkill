const { send, lightCommand, requestType } = require('../http');
const createActivationStartedResponse = require('./ResponseController').createActivationStartedResponse;

/**
 * Handles Scene requests.
 * @param {Object} directive
 * @return {Promise}
 */
exports.sceneHandler = (request, callback) => {
	const endpointId = request.directive.endpoint.endpointId;

	return send(requestType.SET_SCENE, endpointId).then((result) => {
		return createActivationStartedResponse(request, result);
	});
};

