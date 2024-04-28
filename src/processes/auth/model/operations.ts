import { getDeviceToken } from '@/features/listening';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import postRegisterUser from '../api/postRegisterUser';
import postVerifyEmail from '../api/postVerifyEmail';

const setUserRole = createAction<'kid' | 'adult' | null>('auth/setUserRole');

export { setUserRole };
    
export const getTokenThank = createAsyncThunk(
    'auth/token',
    getDeviceToken,
);

export const postRegisterUserThank = createAsyncThunk(
  'auth/registerUser',
    postRegisterUser
);

export const postVerifyEmailThank = createAsyncThunk(
  'auth/verifyEmail',
    postVerifyEmail
);




