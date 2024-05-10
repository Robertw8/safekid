import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import postRegisterUser from '../api/postRegisterUser';
import postVerifyEmail from '../api/postVerifyEmail';
import postLoginUser from '../api/postLoginUser';
import delParentAccount from '../api/delParentAccount';
import { getDeviceToken } from '@/shared/api';
import postResendVerifyCode from '../api/postResendVerifyCode';
import getUserInfo from '../api/getUserInfo';

export const setUserRole = createAction<'kid' | 'adult' | null>(
  'auth/setUserRole'
);

export const getTokenThunk = createAsyncThunk('auth/token', getDeviceToken);

export const postRegisterUserThunk = createAsyncThunk(
  'auth/registerUser',
  postRegisterUser
);

export const postResendVerifyCodeThunk = createAsyncThunk(
  'auth/resendVerifyCode',
  postResendVerifyCode
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

export const getUserInfoThunk = createAsyncThunk(
  'auth/getUserInfo',
  getUserInfo
);
