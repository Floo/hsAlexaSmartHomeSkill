/**
 * http module.
 * @module http/index
 */

const request = require('request');

/**
 * Types of requests available.
 *
 * @param {string} GET_STATUS - A request type that returns the status of a device.
 * @param {string} GET_CONTROL - A request type that returns the control information of a device.
 * @param {string} CONTROL_DEVICE_BY_VALUE - A request type that sets a new value on a device.
 */
const requestType = {
	GET_LIGHTS: 'getlights',
	GET_SCENES: 'getscenes',
	SET_LIGHT: 'setlight',
	SET_SCENE: 'setscene',
	SET_ENTERTAIN: 'setentertain', //PM8000 und RaspiDAC
	SET_TV: 'settv' //für TV
};

const lightCommand = {
	FS20_AUS: '0',
	FS20_AN: '17', //alter Wert
	FS20_AN_100: '16',
	FS20_AN_93: '15',
	FS20_AN_87: '14',
	FS20_AN_81: '13',
	FS20_AN_75: '12',
	FS20_AN_68: '11',
	FS20_AN_62: '10',
	FS20_AN_56: '9',
	FS20_AN_50: '8',
	FS20_AN_43: '7',
	FS20_AN_37: '6',
	FS20_AN_31: '5',
	FS20_AN_25: '4',
	FS20_AN_18: '3',
	FS20_AN_12: '2',
	FS20_AN_06: '1',
	FS20_DIMM_UP: '19',
	FS20_DIMM_DOWN: '20',
	DIMM_UP_START: '1',
	DIMM_UP_STOP: '2',
	DIMM_DOWN_START: '3',
	DIMM_DOWN_STOP: '4'
};

/**
 * Abstraction for requests to the HomeSeer JSON API.
 *
 * Requests should be one of getstatus, getcontrol,
 * and controldevicebyvalue. If a request of type
 * controldevicebyvalue is made, another request of
 * type getstatus, with the device's new value, will
 * be automatically made with its result returned.
 *
 * @param {string} request - The type of request to make.
 * @param {string} ref - The ref of the device to request or control.
 * @param {number} [value] - The value to set on the device when controlling.
 * @return {Promise}
 */
const send = (request, endpointID, value, repeat) => {

	let option = createOptionTemplate();

	if (request === requestType.GET_LIGHTS) {

		option.url += '/licht_m.php?id=licht';
		option.method = 'GET';

	} else if (request === requestType.GET_SCENES) {

		option.url += '/licht_m.php?id=szene';
		option.method = 'GET';
		
	} else if (request === requestType.SET_LIGHT) {

		option.url += '/drv.php';
		option.method = 'POST';
		option.form = {device: 'LICHT', txtLampe: endpointID, txtWert: value};
		
	} else if (request === requestType.SET_SCENE) {

		option.url += '/drv.php';
		option.method = 'POST';
		option.form = {device: 'SZENE', txtSzene: endpointID};
	} else if (request === requestType.SET_ENTERTAIN) {
		
		option.url += '/music.php';
		option.method = 'POST';
		if (!repeat) {
			option.form = {endpoint: endpointID, cmd: value};
		} else {
			option.form = {endpoint: endpointID, cmd: value, repeat: repeat};
		}
	} 
	
	return httpRequest(option);
};

const httpRequest = (option) => {
	return new Promise((resolve, reject) => {
		
		request(option, function (error, response, body) {
/* 			console.log('error:', error); // Print the error if one occurred
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			console.log('body:', body); // Print the HTML for the Google homepage. */
			if (error) {
				reject(error);
			} else {
				if ((response && response.statusCode) === 200) {
					option.method === 'GET' ? resolve(body) : resolve('OK');
				} else {
					throw new Error(`Server responded: ${response && response.statusCode}`);
				}
			}
		});

	});
};

const createOptionTemplate = () => {
	return {
		method: 'GET',
		url: process.env.METH9_HOST,
		form: null,
		auth: {
			user: process.env.METH9_USERNAME,
			pass: process.env.METH9_PASSWORD,
			sendImmediately: false
		}
	};
};

module.exports = {
	requestType, lightCommand, send
};
