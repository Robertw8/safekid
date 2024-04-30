import { RootState } from '@/app/providers/StoreProvider';

export const selectListKids = (state: RootState) => state.listKids.kids;
export const selectListKidsLoading = (state: RootState) => state.listKids.loading;
export const selectListKidsError = (state: RootState) => state.listKids.error;
