import { RootState } from '@/app/providers/StoreProvider';

export const selectRole = (state: RootState) => state.auth.role;
export const selectUserData = (state: RootState) => state.auth.userData;
export const selectAuthenticated = (state: RootState) =>
  state.auth.authenticated;
export const selectVerifyEmail = (state: RootState) => state.auth.verifyEmail;
export const selectUserId = (state: RootState) => state.auth.userId;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectToken = (state: RootState) => state.auth.token;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
