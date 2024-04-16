import { RootState } from '@/app/providers/StoreProvider/config';

export const selectRole = (state: RootState) => state.auth.role;
