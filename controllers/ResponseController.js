const endpoints = require('../endpoints.json');
const utils = require('../lib/utils');

/**
 * Handles responses sent back to Alexa.
 * @param {Object} directive
 * @param {Object} response
 */
exports.createResponse = (request, status) => {
	const { name, messageId, correlationToken } = request.directive.header;
	const endpoint = request.directive.endpoint.endpointId;
	const response = createResponseTemplate();

	/* 	const endpoint = Array.from(endpoints).find(ep =>
			ep.endpointId === request.directive.endpoint.endpointId
		); */

	/* 	const properties = response.context.properties;
		Array.from(endpoint['capabilities']).forEach(capability => {
			switch (capability['interface']) {
				case 'Alexa.EndpointHealth':
					properties.push(getHealthProperty(device));
					break;
				case 'Alexa.PowerController':
					properties.push(getPowerProperty(device, control));
					break;
				case 'Alexa.BrightnessController':
					properties.push(getBrightnessProperty(device, control));
					break;
				case 'Alexa.LockController':
					properties.push(getLockProperty(device, control));
					break;
			}
		}); */
	const properties = response.context.properties;

	switch (request.directive.header.namespace) {
		case 'Alexa.PowerController':
			properties.push(getPowerProperty(request));
			break;
		case 'Alexa.BrightnessController':
			properties.push(getBrightnessProperty(request));
			break;
		case 'Alexa.StepSpeakerController':
		
			break;
		case 'Alexa.InputController':
			properties.push(getInputProperty(request));
			break;
		case 'Alexa.ChannelController':
			properties.push(getChannelProperty(request));
			break;
		case 'Alexa.PlaybackController':
			
			break;
	}

	properties.push(getHealthProperty(status));

	const { header } = response.event;
	header.name = 'Response';
	header.messageId = `${messageId}-R`;
	header.correlationToken = correlationToken;
	response.event.endpoint.endpointId = endpoint;

	return response;
};

const getHealthProperty = (status) => {
	// TODO: Actually verify health somehow. Durch status als Rückgabe von send() übergeben!
	return {
		namespace: 'Alexa.EndpointHealth',
		name: 'connectivity',
		value: { 'value': status },
		timeOfSample: new Date().toISOString(),
		uncertaintyInMilliseconds: 200
	};
};

const getPowerProperty = (request) => {
	return {
		namespace: 'Alexa.PowerController',
		name: 'powerState',
		value: request.directive.header.name === 'TurnOn' ? 'ON' : 'OFF',
		timeOfSample: new Date().toISOString(),
		uncertaintyInMilliseconds: 200
	};
};

const getBrightnessProperty = (request) => {
	return {
		namespace: 'Alexa.BrightnessController',
		name: 'brightness',
		value: 50,
		timeOfSample: new Date().toISOString(),
		uncertaintyInMilliseconds: 200
	};
};

const getInputProperty = (request) => {
	return {
		namespace: 'Alexa.InputController',
		name: 'input',
		value: 'empty',
		timeOfSample: new Date().toISOString(),
		uncertaintyInMilliseconds: 200
	};
};

const getChannelProperty = (request) => {
	return {
		namespace: 'Alexa.ChannelController',
		name: 'channel',
		value: { number: 1, callSign: 'empty'},
		timeOfSample: new Date().toISOString(),
		uncertaintyInMilliseconds: 200
	};
};

exports.createActivationStartedResponse = (request, status) => {
	const response = {
		context: {},
		event: {
			header: {
				messageId: utils.uuid(),
				correlationToken: '',
				namespace: 'Alexa.SceneController',
				name: 'ActivationStarted',
				payloadVersion: "3"
			},
			endpoint: {
				endpointId: ''
			},
			payload: {
				cause : {
					type: 'VOICE_INTERACTION'
				  },
				  timestamp : new Date().toISOString()
			}
		}
	}
	response.event.header.correlationToken = request.directive.header.correlationToken;
	response.event.endpoint.endpointId = request.directive.endpoint.endpointId;
	return response;
};


/**
 * Takes a date string in the format of: /Date(1507385107697)/
 * and converts it into ISO format: 2017-10-07T14:29:46.192Z
 * @param {string} dateStr
 * @return {string}
 */
const parseDate = dateStr => {
	let d;

	d = /\d+/.exec(dateStr)[0];
	d = parseInt(d, 10);
	d = new Date(d);

	return d.toISOString();
};

const createResponseTemplate = () => {
	return {
		context: {
			properties: []
		},
		event: {
			header: {
				namespace: 'Alexa',
				name: '',
				payloadVersion: '3',
				messageId: '',
				correlationToken: ''
			},
			endpoint: {
				endpointId: ''
			},
			payload: {}
		}
	};
};

/**
* Create an Alexa Smart Home Skill error response
* @param {object} err Error
* @param {string} correlationToken passed in from request
* @param {string} endpointId device endpoint id "{controllerId}-{device|scene}-{dId}"
*/
exports.createErrorResponse = (err, correlationToken, endpointId) => {
	const errType = err.type || 'INTERNAL_ERROR';
	utils.log(errType, err.message + (err.stack || ''));
	const response = {
		event: {
			header: {
				namespace: 'Alexa',
				name: 'ErrorResponse',
				messageId: utils.uuid(),
				payloadVersion: '3'
			},
			payload: {
				type: errType,
				message: err.message
			}
		}
	};
	if (correlationToken) {
		response.event.header.correlationToken = correlationToken;
	}
	if (endpointId) {
		response.event.endpoint = { endpointId };
	}
	if (err.validRange) {
		response.event.payload.validRange = err.validRange;
	}
	return response;
}
