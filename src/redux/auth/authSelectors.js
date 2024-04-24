import { createSelector } from '@reduxjs/toolkit';

// Select the entire auth slice
export const selectAuth = state => state.auth;

// Select the isLoggedIn from the auth slice
export const selectIsLoggedIn = createSelector(
  [selectAuth],
  auth => auth.isLoggedIn
);

// Select the user from the auth slice
export const selectUser = createSelector([selectAuth], auth => auth.user);

// Select the isRefreshing from the auth slice
export const selectIsRefreshing = createSelector(
  [selectAuth],
  auth => auth.isRefreshing
);
