import { RootState } from '@/app/providers/StoreProvider';

export const selectEnabled = (state: RootState) => state.listening.enabled;
