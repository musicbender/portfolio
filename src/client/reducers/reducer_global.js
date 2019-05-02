import initialState from '../configs/initial-state';
import {
  PAGE_LOADED,
  SPLASH_CHANGED,
  MODE_CHANGED,
  TRANSPORT_CHANGED,
  MENU_CHANGED
} from '../configs/constants';

export default function global(state = initialState.global, action) {
  const { type, payload } = action;
  switch (type) {
    case PAGE_LOADED:
      return { ...state, pageLoaded: true, };
    case SPLASH_CHANGED:
      return { ...state, splashOpen: payload };
    case TRANSPORT_CHANGED:
      return { ...state, transportOpen: payload };
    case MENU_CHANGED:
      return { ...state, menuhOpen: payload };
    case MODE_CHANGED:
      return { ...state, mode: payload };
    default:
      return state;
  }
}
