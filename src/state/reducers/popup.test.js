import { SHOW_POPUP, HIDE_POPUP } from '../action-types/popup';
import popupReducer, { INITIAL_STATE } from './popup';

describe('popup reducer', () => {
  it('returns the initial state', () => {
    expect(popupReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('handles SHOW_POPUP', () => {
    const action = { type: SHOW_POPUP };
    expect(popupReducer(INITIAL_STATE, action)).toEqual({ ...INITIAL_STATE, isVisible: true });
  });

  it('handles HIDE_POPUP', () => {
    const action = { type: HIDE_POPUP };
    expect(popupReducer(INITIAL_STATE, action)).toEqual(INITIAL_STATE);
  });
});
