import { createSelector } from 'reselect';

const selectUi = (state) => state.ui;

export const selectIsSiginModalOpen = createSelector(
  [selectUi],
  (ui) => ui.isSignInModalOpen
);

export const selectIsCreateActivityModalOpen = createSelector(
  [selectUi],
  (ui) => ui.isCreateActivityModalOpen
);
