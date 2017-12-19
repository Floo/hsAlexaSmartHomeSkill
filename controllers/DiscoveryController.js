
const endpoints = require('../endpoints.json');
const { send, lightCommand, requestType } = require('../http');

/**
 * Handles a discovery request.
 * @param {Object} directive
 * @param {Object} context
 */

/* exports.discoveryHandler = (request, callback) => {
	const response = createDiscoveryTemplate();
	const { event } = response;

	event.header.messageId = request.directive.header.messageId;
	event.payload.endpoints = endpoints;

	return Promise.resolve(response);
}; */

exports.discoveryHandler = (request, callback) => {
	const response = createDiscoveryTemplate();
	const { event } = response;
	const endpoints = event.payload.endpoints;

	event.header.messageId = request.directive.header.messageId;

/* 	send(requestType.GET_LIGHTS).then((res) => {
		console.log('DISCOVERYCONTROLLER_1: ', res);
		var json = JSON.parse(res);
		console.log('DISCOVERYCONTROLLER_2: ', json);
	}); */
	
	const musicPlayerEndpoint = createMusicPlayerTemplate();
	const amplifierEndpoint = createAmplifierTemplate();
	const tvEndpoint = createTVTemplate();
	endpoints.push(musicPlayerEndpoint);
	endpoints.push(amplifierEndpoint);
	endpoints.push(tvEndpoint);
	

	return Promise.all([send(requestType.GET_LIGHTS), send(requestType.GET_SCENES)]).then((devices) => {
		let devLights = JSON.parse(devices[0]);
		let devScenes = JSON.parse(devices[1]);
		devLights.items.forEach(element => {
			const lightEndpoint = createLichtEndpointTemplate();
			lightEndpoint.endpointId = element.id;
			lightEndpoint.friendlyName = element.name;
			lightEndpoint.description = element.name;
			endpoints.push(lightEndpoint);
		});
		devScenes.items.forEach(element => {
			const sceneEndpoint = createSceneEndpointTemplate();
			sceneEndpoint.endpointId = element.name;
			sceneEndpoint.friendlyName = element.name;
			sceneEndpoint.description = element.name;
			endpoints.push(sceneEndpoint);
		});
		return response;
	});
};

const createDiscoveryTemplate = () => {
	return {
		event: {
			header: {
				namespace: 'Alexa.Discovery',
				name: 'Discover.Response',
				payloadVersion: '3',
				messageId: ''
			},
			payload: {
				endpoints: []
			}
		}
	};
};

const createLichtEndpointTemplate = () => {
	return {
		endpointId: '',
		manufacturerName: 'Meth9',
		friendlyName: '',
		description: '',
		displayCategories: [
			'LIGHT'
		],
		cookie: {},
		capabilities: [
			{
				type: 'AlexaInterface',
				interface: 'Alexa',
				version: '3'
			},
			{
				type: 'AlexaInterface',
				interface: 'Alexa.PowerController',
				version: '3',
				properties: {
					supported: [
						{
							name: 'powerState'
						}
					],
					'proactivelyReported': false,
					'retrievable': false
				}
			},
			{
				type: 'AlexaInterface',
				interface: 'Alexa.BrightnessController',
				version: '3',
				properties: {
					supported: [
						{
							name: 'brightness'
						}
					],
					proactivelyReported: false,
					retrievable: false
				}
			},
			{
				type: 'AlexaInterface',
				interface: 'Alexa.EndpointHealth',
				version: '3',
				properties: {
					supported: [
						{
							name: 'connectivity'
						}
					],
					proactivelyReported: false,
					retrievable: true
				}
			}
		]
	}
};

const createSceneEndpointTemplate = () => {
	return {
		endpointId: '',
		manufacturerName: 'Meth9',
		friendlyName: '',
		description: '',
		displayCategories: [
			'SCENE_TRIGGER'
		],
		cookie: {},
		capabilities: [
			{
				type: 'AlexaInterface',
				interface: 'Alexa',
				version: '3'
			},
			{
				type: 'AlexaInterface',
				interface: 'Alexa.SceneController',
				version: '3',
				supportsDeactivation: false,
				proactivelyReported: false
			},
			{
				type: 'AlexaInterface',
				interface: 'Alexa.EndpointHealth',
				version: '3',
				properties: {
					supported: [
						{
							name: 'connectivity'
						}
					],
					proactivelyReported: false,
					retrievable: true
				}
			}
		]
	}
};

const createAmplifierTemplate = () => {
	"endpointId": "pm8000",
	"manufacturerName": "Marantz",
	"friendlyName": "Verstärker",
	"description": "Marantz PM-8000 HiFi-Verstärker",
	"displayCategories": [
		"OTHER"
	],
	"cookie": {},
	"capabilities": [
		{
			"type": "AlexaInterface",
			"interface": "Alexa",
			"version": "3"
		},
		{
			"type": "AlexaInterface",
			"interface": "Alexa.PowerController",
			"version": "3",
			"properties": {
				"supported": [
					{
						"name": "powerState"
					}
				],
				"proactivelyReported": false,
				"retrievable": false
			}
		},
		{
			"type": "AlexaInterface",
			"interface": "Alexa.InputController",
			"version": "3",
			"properties": {
				"supported": [
					{
						"name": "input"
					}
				],
				"proactivelyReported": false,
				"retrievable": false
			}
		},
		{
			"type": "AlexaInterface",
			"interface": "Alexa.StepSpeaker",
			"version": "3",
			"properties": {
				"supported": [
					{
						"name": "volumeSteps"
					},
					{
						"name": "muted"
					}
				],
				"proactivelyReported": false,
				"retrievable": false
			}
		},
		{
			"type": "AlexaInterface",
			"interface": "Alexa.EndpointHealth",
			"version": "3",
			"properties": {
				"supported": [
					{
						"name": "connectivity"
					}
				],
				"proactivelyReported": false,
				"retrievable": true
			}
        }
    ]
};

const createTVTemplate = () => {
	"endpointId": "tv",
	"manufacturerName": "Panasonic",
	"friendlyName": "Fernseher",
	"description": "Panasonic Viera TV",
	"displayCategories": [
		"OTHER"
	],
	"cookie": {},
	"capabilities": [
		{
			"type": "AlexaInterface",
			"interface": "Alexa",
			"version": "3"
		},
		{
			"type": "AlexaInterface",
			"interface": "Alexa.PowerController",
			"version": "3",
			"properties": {
				"supported": [
					{
						"name": "powerState"
					}
				],
				"proactivelyReported": false,
				"retrievable": false
			}
		},
		{
			"type": "AlexaInterface",
			"interface": "Alexa.ChannelController",
			"version": "3",
			"properties": {
				"supported": [
					{
						"name": "channel"
					}
				],
				"proactivelyReported": false,
				"retrievable": false
			}
		},
		{
			"type": "AlexaInterface",
			"interface": "Alexa.InputController",
			"version": "3",
			"properties": {
				"supported": [
					{
						"name": "input"
					}
				],
				"proactivelyReported": false,
				"retrievable": false
			}
		},
		{
			"type": "AlexaInterface",
			"interface": "Alexa.StepSpeaker",
			"version": "3",
			"properties.supported":[
				{
					"name": "muted",
				},
				{
					"name": "volume"
				}]	
				"proactivelyReported": false,
				"retrievable": false
			}
		},
		{
			"type": "AlexaInterface",
			"interface": "Alexa.EndpointHealth",
			"version": "3",
			"properties": {
				"supported": [
					{
						"name": "connectivity"
					}
				],
				"proactivelyReported": false,
				"retrievable": true
			}
        }
    ]
};

const createMusicPlayerTemplate = () => {
	"endpointId": "raspiDAC",
	"manufacturerName": "Meth 9",
	"friendlyName": "MusicPlayer",
	"description": "RaspiDAC Music Player",
	"displayCategories": [
		"OTHER"
	],
	"cookie": {},
	"capabilities": [
		{
			"type": "AlexaInterface",
			"interface": "Alexa",
			"version": "3"
		},
		{
			"type": "AlexaInterface",
			"interface": "Alexa.PowerController",
			"version": "3",
			"properties": {
				"supported": [
					{
						"name": "powerState"
					}
				],
				"proactivelyReported": false,
				"retrievable": false
			}
		},
		{
			"type": "AlexaInterface",
			"interface": "Alexa.ChannelController",
			"version": "3",
			"properties": {
				"supported": [
					{
						"name": "channel"
					}
				],
				"proactivelyReported": false,
				"retrievable": false
			}
		},
		{
			"type": "AlexaInterface",
			"interface": "Alexa.InputController",
			"version": "3",
			"properties": {
				"supported": [
					{
						"name": "input"
					}
				],
				"proactivelyReported": false,
				"retrievable": false
			}
		},
		{  
            "type":"AlexaInterface",
            "interface":"Alexa.PlaybackController",
            "version": "3",
            "properties":{ },
            "supportedOperations" : ["Play", "Pause", "Stop", "Next", "Previous"] 
        },
		{
			"type": "AlexaInterface",
			"interface": "Alexa.EndpointHealth",
			"version": "3",
			"properties": {
				"supported": [
					{
						"name": "connectivity"
					}
				],
				"proactivelyReported": true,
				"retrievable": true
			}
        }
    ]
};
