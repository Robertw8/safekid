import { getDeviceToken } from '@/features/listening';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import postRegisterUser from '../api/postRegisterUser';
import postVerifyEmail from '../api/postVerifyEmail';
import postLoginUser from '../api/postLoginUser';
import delParentAccount from '../api/delParentAccount';

const setUserRole = createAction<'kid' | 'adult' | null>('auth/setUserRole');

export { setUserRole };
    
export const getTokenThunk = createAsyncThunk(
    'auth/token',
    getDeviceToken,
);

export const postRegisterUserThunk = createAsyncThunk(
  'auth/registerUser',
    postRegisterUser
);

export const postVerifyEmailThunk = createAsyncThunk(
  'auth/verifyEmail',
    postVerifyEmail
);

export const postLoginUserThunk = createAsyncThunk(
  'auth/loginUser',
    postLoginUser
);

export const delParentAccountThunk = createAsyncThunk(
  'auth/delParent',
    delParentAccount
);




