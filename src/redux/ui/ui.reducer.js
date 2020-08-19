import { uiActionTypes } from './ui.types';
const INITIAL_STATE = {
  isSignInModalOpen: false,
  isCreateActivityModalOpen: false,
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case uiActionTypes.SET_SIGN_IN_MODAL_OPEN:
      return { ...state, isSignInModalOpen: action.payload };
    case uiActionTypes.SET_ACTIVITY_MODAL_OPEN:
      return { ...state, isCreateActivityModalOpen: action.payload };
    default:
      return state;
  }
};

export default uiReducer;
