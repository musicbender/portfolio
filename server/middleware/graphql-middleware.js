const { GRAPHQL_ALLOWED_ORIGINS, GRAPHQL_ALLOWED_METHODS, GRAPHQL_ALLOWED_HEADERS } = process.env;

const graphQLSetupMiddleware = (req, res, next) => {
  const allowedOrigins = GRAPHQL_ALLOWED_ORIGINS.split(',');
  const origin = req.headers.origin;

  if (allowedOrigins.indexOf(origin) > -1) {
   res.header('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Methods', GRAPHQL_ALLOWED_METHODS || '*');
  res.header('Access-Control-Allow-Headers', GRAPHQL_ALLOWED_HEADERS || '*');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
}

export default graphQLSetupMiddleware;
