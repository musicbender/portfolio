import uuid from 'uuid';

const requestIDMiddleware = (req, res, next) => {
  req.reqID = uuid();
  next();
}

export default requestIDMiddleware;
