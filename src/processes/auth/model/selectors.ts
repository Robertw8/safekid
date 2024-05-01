import { RootState } from '@/app/providers/StoreProvider';

export const selectRole = (state: RootState) => state.auth.role;
export const selectUserData = (state: RootState) => state.auth.userData;
export const selectAuthenticated = (state: RootState) => state.auth.authenticated;
export const selectToken = (state: RootState) => state.auth.token;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;


