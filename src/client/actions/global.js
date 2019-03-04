import { PAGE_LOADED, SPLASH_CHANGED, MODE_CHANGED } from '../configs/constants';

export function loadPage() {
  return {
    type: PAGE_LOADED
  }
}

export function changeSplash(open) {
  return {
    type: SPLASH_CHANGED,
    payload: open
  }
}
