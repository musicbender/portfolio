import initialState from '../configs/initial-state';
import {
  RECENT_WORK_TOP_SET,
  CONTACT_TOP_SET
} from '../configs/constants';

export default function home(state = initialState.home, action) {
  const { type, payload } = action;
  switch (type) {
    case RECENT_WORK_TOP_SET:
      return { ...state, recentWorkTop: payload };
    case CONTACT_TOP_SET:
      return { ...state, contactTop: payload };
    default:
      return state;
  }
}
