import { createActivityActionTypes } from './createActivity.types';

const INITAIL_STATE = {
  isPublic: false,
};

const createActivityReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case createActivityActionTypes.SET_ACTIVITY_PUBLIC:
      return { ...state, isPublic: action.payload };
    default:
      return state;
  }
};

export default createActivityReducer;
