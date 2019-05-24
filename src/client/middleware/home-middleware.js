import { ABOUT_TOP_SET, RECENT_WORK_TOP_SET, CONTACT_TOP_SET } from '../configs/constants';

const homeMiddleware = store => next => action => {
  const { type, payload } = action;
  switch (type) {
    case ABOUT_TOP_SET:
    case RECENT_WORK_TOP_SET:
    case CONTACT_TOP_SET: {
      let modifiedAction = action;
      modifiedAction.payload = Math.round(payload - 200 + (window.scrollY || 0));
      next(modifiedAction);
      break;
    }
    default:
      next(action);
  }
}

export default homeMiddleware;
