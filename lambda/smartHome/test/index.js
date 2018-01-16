/* eslint-disable no-unused-vars */
const handler = require('../index').handler;
const {
	binarySwitchTurnOn,
	binarySwitchTurnOff,
	dimmerSwitchTurnOn,
	dimmerSwitchTurnOff,
	dimmerSwitchLastLevel,
	dimmerSwitchSet,
	dimmerSwitchBrighten,
	dimmerSwitchDim,
	activateScene,
	speakerAdjust,
	speakerSetVolume,
	speakerMute,
	channelControllerChange,
	channelControllerSkip,
	stepSpeakerMute,
	stepSpeakerVolume,
	playbackController,
	discovery
} = require('./templates');

handler(stepSpeakerVolume, 'undefined', (error, result) => {
	if (error) console.log('ERROR: ', error);
	else console.log('result', JSON.stringify(result, null, 4));
});
