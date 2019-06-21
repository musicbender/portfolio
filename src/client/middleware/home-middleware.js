import { config } from '../../shared/config.json';
import {
  ABOUT_TOP_SET,
  RECENT_WORK_TOP_SET,
  SKILLS_TOP_SET
} from '../configs/constants';

const homeMiddleware = store => next => action => {
  const { type, payload } = action;
  switch (type) {
    case ABOUT_TOP_SET:
    case RECENT_WORK_TOP_SET:
    case SKILLS_TOP_SET: {
      let modifiedAction = action;
      const heightOffset = window.innerHeight - config.windowHeightConstant;

      if (payload.didResize) {
        modifiedAction.payload = Math.round((payload.value - 200 + (window.scrollY || 0)));
      } else {
        modifiedAction.payload = payload.value - heightOffset;
      }

      next(modifiedAction);
      break;
    }
    default:
      next(action);
  }
}

export default homeMiddleware;
