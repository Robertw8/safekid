import { RootState } from '@/app/providers/StoreProvider';

export const selectParentInfo = (state: RootState) => state.parentInfo.email;
