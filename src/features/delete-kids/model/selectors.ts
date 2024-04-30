import { RootState } from '@/app/providers/StoreProvider';

export const selectKidsDeleteLoading = (state: RootState) =>
  state.kidsDelete.loading;
export const selectKidsDeleteError = (state: RootState) =>
  state.kidsDelete.error;
