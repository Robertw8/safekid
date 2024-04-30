import { RootState } from '@/app/providers/StoreProvider';

export const selectEnabled = (state: RootState) => state.listening.enabled;
export const selectIsLoggedIn = (state: RootState) =>
  state.listening.isLoggedIn;
export const selectKidId = (state: RootState) => state.listening.kidId;
export const selectDeviceToken = (state: RootState) =>
  state.listening.deviceToken;
