import { RootState } from '@/app/providers/StoreProvider';

export const selectKidsLoading = (state: RootState) => state.kids.loading;
export const selectKidsError = (state: RootState) => state.kids.error;
