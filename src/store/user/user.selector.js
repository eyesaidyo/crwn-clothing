import { createSelector } from 'reselect'
export const selectUserReducer = (state) => state.user

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userReducer) => userReducer.currentUser
)