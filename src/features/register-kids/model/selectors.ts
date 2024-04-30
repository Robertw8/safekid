import { RootState } from '@/app/providers/StoreProvider';

export const selectRegisterKidsLoading = (state: RootState) =>
  state.registerKids.loading;
export const selectRegisterKidsError = (state: RootState) =>
  state.registerKids.error;
