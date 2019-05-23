import { getMetaData } from '../../shared/controllers/meta';

const metaDataMiddleware = (req, res, next) => {
  getMetaData(req.path)
    .then((result) => {
      if (result) {
        req.metaData = result.metaData || null;
      }

      next();
    })
    .catch(err => {
      throw new Error(err);
      next();
    });
}

export default metaDataMiddleware;
