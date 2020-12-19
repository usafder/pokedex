import { SHOW_POPUP, HIDE_POPUP } from '../actionTypes/popup';

export const INITIAL_STATE = { isVisible: false };

const popupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_POPUP:
      return { ...state, isVisible: true };
    case HIDE_POPUP:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default popupReducer;
