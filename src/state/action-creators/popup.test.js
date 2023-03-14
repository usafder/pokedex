import { SHOW_POPUP, HIDE_POPUP } from '../action-types/popup';
import { showPopup, hidePopup } from './popup';

describe('popup action creator', () => {
  it('showPopup', () => {
    expect(showPopup()).toEqual({ type: SHOW_POPUP });
  });

  it('hidePopup', () => {
    expect(hidePopup()).toEqual({ type: HIDE_POPUP });
  });
});
