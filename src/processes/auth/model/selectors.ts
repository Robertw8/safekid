import { RootState } from '@/app/providers/StoreProvider';

export const selectRole = (state: RootState) => state.auth.role;
