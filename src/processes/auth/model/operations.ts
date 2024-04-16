import { createAction } from '@reduxjs/toolkit';

const setUserRole = createAction<'kid' | 'adult' | null>('auth/setUserRole');

export { setUserRole };
