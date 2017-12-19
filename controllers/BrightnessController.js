const {send, lightCommand, requestType} = require('../http');
const createResponse = require('./ResponseController').createResponse;
const utils = require('../lib/utils');

const values = [0, 6.25, 12.5, 18.75, 25, 31.25, 37.5, 43.75, 50, 56.25, 62.5, 68.75, 75, 81.25, 87.5, 93.75, 100];
/**
 * Handles Brightness requests.
 * @param {Object} directive
 * @return {Promise}
 */
exports.brightnessHandler = (request, callback) => {

/* 	const value = request.directive.header.name === 'AdjustBrightness'
		? payload['brightnessDelta'] : payload['brightness']; */
	const command = request.directive.header.name === 'AdjustBrightness'
		? adjustBrightness : setBrightness;

	return command(request);
};

const adjustBrightness = (request) => {
	const endpointId = request.directive.endpoint.endpointId; 
	const brightnessDelta = request.directive.payload.brightnessDelta;

	let value = brightnessDelta > 0 ? lightCommand.FS20_DIMM_UP : lightCommand.FS20_DIMM_DOWN;
	let iterations = values.indexOf(utils.closestNumber(Math.abs(brightnessDelta), values));
	let i = 0; 

	function next() {
		return send(requestType.SET_LIGHT, endpointId, value).then((result) => {
			i++;
			if (i < iterations) {
				 // run the operation again
				 return next();
			} else {
				 return result;
			}
		});
	}
	
	return next().then(function(result) {
		  // process final result here
		  return createResponse(request, result);
	});

/* 	return send(requestType.SET_LIGHT, endpointId, value)
		.then(() => { send(requestType.SET_LIGHT, endpointId, value);})
		.then((result) => { 
		return createResponse(request, result); 
	}); */
};

const setBrightness = (request) => {
	const endpointId = request.directive.endpoint.endpointId; 
	const brightness = request.directive.payload.brightness;

	let value = values.indexOf(utils.closestNumber(brightness, values));

	return send(requestType.SET_LIGHT, endpointId, value).then((result) => { 
		return createResponse(request, result); 
	});
};
