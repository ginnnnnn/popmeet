import { createActivityActionTypes } from './createActivity.types';

export const setActivityPublic = (bool) => ({
  type: createActivityActionTypes.SET_ACTIVITY_PUBLIC,
  payload: bool,
});
