const {send, requestType} = require('../http');

/**
 * Handles State Report requests.
 * @param {Object} directive
 * @return {Promise}
 */
exports.stateReportHandler = ({endpoint}) => {
	const {endpointId} = endpoint;

	return send(requestType.GET_CONTROL, endpointId)
		.then(controls => send(requestType.GET_STATUS, endpointId)
			.then(device => ({device, controls}))
		);
};
