const { send, requestType } = require('../http');
const createResponse = require('./ResponseController').createResponse;

/**
 * Handles Power requests.
 * @param {Object} directive
 * @return {Promise}
 */
exports.channelHandler = (request, callback) => {
  const endpointId = request.directive.endpoint.endpointId;
  var cmd = '';
  var device = '';

  if (request.directive.header.name === "ChangeChannel") {
    let channel = request.directive.payload.channel.number;
    cmd = `set ${endpointId} channel${channel}`;
  } else if (request.directive.header.name === "SkipChannels") {
    let channeloffset = request.directive.payload.channelCount;
    if (channeloffset >= 0) {
      cmd = `set ${endpointId} channel+${channeloffset}`;
    } else {
      cmd = `set ${endpointId} channel${channeloffset}`;
    }
  }

  return send(requestType.SET_ENTERTAIN, endpointId, cmd).then((result) => {
    return createResponse(request, result);
  });
};