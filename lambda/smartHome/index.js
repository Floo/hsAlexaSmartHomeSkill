const handleDiscovery = require('./controllers/DiscoveryController').discoveryHandler;
const handlePower = require('./controllers/PowerController').powerHandler;
const handleBrightness = require('./controllers/BrightnessController').brightnessHandler;
const handleScene = require('./controllers/SceneController').sceneHandler;
const handleReportState = require('./controllers/StateReportController').stateReportHandler;
const handleStepSpeaker = require('./controllers/StepSpeakerController').stepSpeakerHandler;
const handleSpeaker = require('./controllers/SpeakerController').speakerHandler;
const handleChannel = require('./controllers/ChannelController').channelHandler;
const handleInput = require('./controllers/InputController').inputHandler;
const handlePlayback = require('./controllers/PlaybackController').playbackHandler;
const createErrorResponse = require('./controllers/ResponseController').createErrorResponse;
const utils = require('./lib/utils');

/**
 * Entry point.
 * @param {Object} request
 * @param {Object} context
 */
//exports.handler = ({directive}, {succeed, fail}) => {
exports.handler = (request, context, cb) => {

	// Log response before finishing
	function callback(err, res) {
		utils.log('DEBUG', `Response: ${JSON.stringify(res)}`);
		cb(err, res);
	}

	const namespace = request.directive.header.namespace || 'unknown';
	const directive = request.directive.header.name || 'unknown';
	utils.log('DEBUG', `${namespace}::${directive} Request: ${JSON.stringify(request)}`);
	 
	let handler = null;

	if (namespace === 'Alexa.Discovery' && directive === 'Discover') {
		handler = handleDiscovery(request, callback);
	
	} else if (namespace === 'Alexa.SceneController' && directive === 'Activate') {
		handler = handleScene(request, callback);
	
	} else if (namespace === 'Alexa.PowerController' && ['TurnOn', 'TurnOff'].indexOf(directive) !== -1) {
		handler = handlePower(request, callback);
	
	} else if (namespace === 'Alexa.BrightnessController' && ['SetBrightness', 'AdjustBrightness'].indexOf(directive) !== -1) {
		handler = handleBrightness(request, callback);
		
	} else if (namespace === 'Alexa.PlaybackController' && ['Play', 'Pause', 'Stop', 'Next', 'Previous'].indexOf(directive) !== -1) {
		handler = handlePlayback(request, callback);
		
	} else if (namespace === 'Alexa.ChannelController' && ['ChangeChannel', 'SkipChannels'].indexOf(directive) !== -1) {
		handler = handleChannel(request, callback);
		
	} else if (namespace === 'Alexa.InputController' && ['SelectInput'].indexOf(directive) !== -1) {
		handler = handleInput(request, callback);
		
	} else if (namespace === 'Alexa.StepSpeaker' && ['AdjustVolume', 'SetMute'].indexOf(directive) !== -1) {
		handler = handleStepSpeaker(request, callback);

	} else if (namespace === 'Alexa.Speaker' && ['AdjustVolume', 'SetVolume', 'SetMute'].indexOf(directive) !== -1) {
		handler = handleSpeaker(request, callback);

	} else if (namespace === 'Alexa' && ['ReportState'].indexOf(directive) !== -1) {
		handler = handleReportState(request, callback);
// TODO Errorhandler testen, schein nicht zu funktionieren!
	} else {
		handler = Promise.reject(
			utils.error('INVALID_DIRECTIVE', `Unsupported namespace/directive: ${namespace}/${directive}`)
		);
	}

	handler
		.then((response) => {
			callback(null, response);
		})
    	.catch((err) => {
    		const correlationToken = request.directive.header.correlationToken;
    		const endpointId = request.directive.endpoint && request.directive.endpoint.endpointId;
			callback(null, createErrorResponse(err, correlationToken, endpointId));
			console.log('ERROR: ', err);  
    });
};

