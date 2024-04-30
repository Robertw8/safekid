import { RootState } from '@/app/providers/StoreProvider';

export const selectSendKidsLoading = (state: RootState) =>
  state.sendKids.loading;
export const selectSendKidsError = (state: RootState) => state.sendKids.error;
