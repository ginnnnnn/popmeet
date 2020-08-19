import { createSelector } from 'reselect';

const selectCreateActivity = (state) => state.createActivity;

export const selectCreateActivityIsPublic = createSelector(
  [selectCreateActivity],
  (createActivity) => createActivity.isPublic
);
