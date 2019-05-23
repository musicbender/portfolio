import {
  RECENT_WORK_TOP_SET,
  CONTACT_TOP_SET
} from '../configs/constants';

export function setRecentWorkTop(value) {
  return {
    type: RECENT_WORK_TOP_SET,
    payload: value
  }
}

export function setContactTop(value) {
  return {
    type: CONTACT_TOP_SET,
    payload: value
  }
}
