function isAuthorized(decoded, request, callback, unauthorized, internalServerError, config) {
  if (config.HOSTED_DOMAIN.split(',').some(domain => domain=='*' || decoded.sub.endsWith(`@${domain}`))) {
    callback(null, request);
  } else {
    unauthorized('Unauthorized', 'User ' + decoded.sub + ' is not permitted.', '', callback);
  }
}

function getSubject(decoded) { return decoded.payload.email; }

exports.isAuthorized = isAuthorized;
exports.getSubject = getSubject;
