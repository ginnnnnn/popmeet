import { uiActionTypes } from './ui.types';

export const setSignInModalOpen = (bool) => {
  return {
    type: uiActionTypes.SET_SIGN_IN_MODAL_OPEN,
    payload: bool,
  };
};

export const setActivityModalOpen = (bool) => {
  return {
    type: uiActionTypes.SET_ACTIVITY_MODAL_OPEN,
    payload: bool,
  };
};
