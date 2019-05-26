import { TRANSPORT_CHANGED, IS_MOBILE_SET } from '../configs/constants';
import { changeTransport } from '../actions/global';
import { config } from '../../shared/config.json';
import { isMobileSize } from '../util/util';

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
    case IS_MOBILE_SET:
      const newAction = action;
      newAction.payload = isMobileSize();
      next(newAction);
      break;
    default:
      return next(action);
  }
}

export default globalMiddleware;
