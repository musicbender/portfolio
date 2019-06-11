import { config } from '../../shared/config.json';
import {
  ABOUT_TOP_SET,
  RECENT_WORK_TOP_SET,
  CONTACT_TOP_SET
} from '../configs/constants';

const homeMiddleware = store => next => action => {
  const { type, payload } = action;
  switch (type) {
    case ABOUT_TOP_SET:
    case RECENT_WORK_TOP_SET:
    case CONTACT_TOP_SET: {
      let modifiedAction = action;
      const heightOffset = window.innerHeight - config.windowHeightConstant;

      if (payload.didResize) {
        modifiedAction.payload = Math.round((payload.value - 200 + (window.scrollY || 0)));
      } else {
        modifiedAction.payload = payload.value - heightOffset;
      }

      console.group('middlewares')
      console.log(`innnerHeight: ${window.innerHeight}`);
      console.log(`heightOffset: ${heightOffset}`);
      console.log(`heightOffset div by 2: ${heightOffset / 2}`);
      console.log(`payload: ${payload.value}`);
      console.log(`didResize: ${payload.didResize}`);
      console.log(`scrollY: ${window.scrollY}`);
      console.log(`output: ${modifiedAction.payload}`);
      console.groupEnd();

      next(modifiedAction);
      break;
    }
    default:
      next(action);
  }
}

export default homeMiddleware;
