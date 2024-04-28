import { getDeviceToken } from '@/features/listening';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import postRegisterUser from '../api/postRegisterUser';

const setUserRole = createAction<'kid' | 'adult' | null>('auth/setUserRole');

export { setUserRole };

export const postRegisterUserThank = createAsyncThunk(
  'auth/registerUser',
    postRegisterUser
);

export const getTokenThank = createAsyncThunk(
    'auth/token',
    getDeviceToken,
)


