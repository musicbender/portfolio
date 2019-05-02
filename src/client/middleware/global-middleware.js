import { TRANSPORT_CHANGED } from '../configs/constants';
import { changeTransport } from '../actions/global';
import { config } from '../../shared/config.json';

const globalMiddleware = store => next => action => {
  const { type, payload } = action;
  switch (type) {
    case TRANSPORT_CHANGED:
      next(action);
      if (!!payload) {
        window.requestTimeout(() => {
          store.dispatch(changeTransport(false))
        }, config.transportDuration);
      }
      break;
    default:
      return next(action);
  }
}

export default globalMiddleware;
