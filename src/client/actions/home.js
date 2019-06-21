import {
  ABOUT_TOP_SET,
  RECENT_WORK_TOP_SET,
  SKILLS_TOP_SET
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

export function setSkillsTop(params) {
  return {
    type: SKILLS_TOP_SET,
    payload: params
  }
}
