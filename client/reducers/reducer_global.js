import { PAGE_LOADED } from '../configs/constants';
import initialState from '../configs/initial-state';

export default function global(state = initialState.global, action) {
  const { type, payload } = action;
  switch (type) {
    case PAGE_LOADED:
      return { ...state, pageLoaded: true, };
    default:
      return state;
  }
}
