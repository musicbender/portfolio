import {
  PAGE_LOADED,
  SPLASH_CHANGED,
  TRANSPORT_CHANGED,
  MENU_CHANGED,
  MODE_CHANGED
} from '../configs/constants';

export function loadPage() {
  return {
    type: PAGE_LOADED
  }
}

export function changeTransport(open) {
  return {
    type: TRANSPORT_CHANGED,
    payload: open
  }
}

export function changeSplash(open) {
  return {
    type: SPLASH_CHANGED,
    payload: open
  }
}

export function changeMenu(open) {
  return {
    type: MENU_CHANGED,
    payload: open
  }
}
