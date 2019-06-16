import {
  ABOUT_TOP_SET,
  RECENT_WORK_TOP_SET,
  CONTACT_TOP_SET
} from '../configs/constants';

export function setAboutTop(params) {
  return {
    type: ABOUT_TOP_SET,
    payload: params
  }
}


export function setRecentWorkTop(params) {
  return {
    type: RECENT_WORK_TOP_SET,
    payload: params
  }
}

export function setContactTop(params) {
  return {
    type: CONTACT_TOP_SET,
    payload: params
  }
}
