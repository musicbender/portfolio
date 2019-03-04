import { PAGE_LOADED, SPLASH_CHANGED, MODE_CHANGED } from '../configs/constants';
import initialState from '../configs/initial-state';

export default function global(state = initialState.global, action) {
  const { type, payload } = action;
  switch (type) {
    case PAGE_LOADED:
      return { ...state, pageLoaded: true, };
    case SPLASH_CHANGED:
      return { ...state, splashOpen: payload };
    case MODE_CHANGED:
      return { ...state, mode: payload };
    default:
      return state;
  }
}
