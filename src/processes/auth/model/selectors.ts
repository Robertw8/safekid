import { RootState } from '@/app/providers/StoreProvider';

export const selectUserRole = (state: RootState) => state.auth.userRole;
export const selectUserData = (state: RootState) => state.auth.userData;
export const selectAuthenticated = (state: RootState) =>
  state.auth.authenticated;
export const selectVerifyEmail = (state: RootState) => state.auth.verifyEmail;
export const selectUserId = (state: RootState) => state.auth.userId;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectToken = (state: RootState) => state.auth.token;
export const selectJwtToken = (state: RootState) => state.auth.jwtToken;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
