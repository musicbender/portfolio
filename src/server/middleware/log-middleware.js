import Logger from '../controllers/logger';
import { limitString } from '../../shared/controllers/util';

/* todo: this needs documentation */

/**
 * Logs the Server Request ID
 * @param request
 */
const logServerRequestId = (request) => {
  if (Object.prototype.hasOwnProperty.call(request, 'serverRequestId')) {
    request.logger.addMetadata('serverRequestId', request.serverRequestId);
  }
};

/**
 * Logs the Express Request
 * @param request
 */
const logRequest = (request) => {
  if (Object.prototype.hasOwnProperty.call(request.headers, 'x-request-id')) {
    request.logger.addMetadata('clientRequestId', request.headers['x-request-id']);
  }

  request.logger.log('client.request', {
    headers: request.headers,
    method: request.method,
    params: request.params,
    query: request.query,
    body: limitString(request.body, process.env.LOGGING_CHAR_LIMIT),
    path: request.path,
    signedCookies: request.signedCookies,
    originalUrl: request.originalUrl,
    protocol: request.protocol,
    baseUrl: request.baseUrl,
    ip: request.ip,
    route: request.route,
    secure: request.secure,
  });
};

/**
 * Logs the Express Response
 * @param request
 * @param response
 */
const logResponse = (request, response) => {
  // On finish, commit logs
  response.on('finish', () => {
    request.logger.log('client.response', {
      body: limitString(response.body, process.env.LOGGING_CHAR_LIMIT),
      headers: response.getHeaders(),
    });
  });

  const oldWrite = response.write;
  const oldEnd = response.end;
  const chunks = [];

  // Proxy res.write
  response.write = function (...args) {
    chunks.push(Buffer.from(args[0]));
    oldWrite.apply(response, args);
  };

  // Proxy res.end
  response.end = function(...args) {
    if (args[0]) {
      chunks.push(Buffer.from(args[0]));
    }
    const body = Buffer.concat(chunks).toString('utf8');
    let jsonBody = null;
    try {
      jsonBody = JSON.parse(limitString(body, process.env.LOGGING_CHAR_LIMIT));
    } catch (err) {
      jsonBody = limitString(body, process.env.LOGGING_CHAR_LIMIT) || null;
    }

    response.body = jsonBody;
    oldEnd.apply(response, args);
  };
};

const logMiddleware = (name = null) => (req, res, next) => {
  if (process.env.LOGGING_ENABLED === 'true') {
    // Get and set logger
    req.logger = new Logger({ name });

    // Log Request ID to Log MetaData
    logServerRequestId(req);

    // Log Request
    logRequest(req);

    // On Complete
    logResponse(req, res);
  }

  return next();
};

export default logMiddleware;
