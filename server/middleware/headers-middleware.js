const { APP_ALLOWED_ORIGINS } = process.env;

const headersMiddleware = (req, res, next) => {
  if (req.originalUrl !== '/graphql') {
    const allowedOrigins = APP_ALLOWED_ORIGINS && APP_ALLOWED_ORIGINS.split(',');
    const origin = req.headers.origin;

    if (allowedOrigins && allowedOrigins.indexOf(origin) > -1) {
     res.header('Access-Control-Allow-Origin', origin);
    }

    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Expose-Headers', 'Content-Length');

    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    } else {
      return next();
    }
  } else {
    return next();
  }
}

export default headersMiddleware;
