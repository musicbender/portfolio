import initialState from '../configs/initial-state';
import {
  ABOUT_TOP_SET,
  RECENT_WORK_TOP_SET,
  SKILLS_TOP_SET
} from '../configs/constants';

export default function home(state = initialState.home, action) {
  const { type, payload } = action;
  switch (type) {
    case ABOUT_TOP_SET:
      return { ...state, aboutTop: payload };
    case RECENT_WORK_TOP_SET:
      return { ...state, recentWorkTop: payload };
    case SKILLS_TOP_SET:
      return { ...state, skillsTop: payload };
    default:
      return state;
  }
}
