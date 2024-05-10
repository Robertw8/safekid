import { createSlice } from '@reduxjs/toolkit';
import type AuthInitialState from '../types/initialState';
import {
  delParentAccountThunk,
  getTokenThunk,
  getUserInfoThunk,
  postLoginUserThunk,
  postRegisterUserThunk,
  postResendVerifyCodeThunk,
  postVerifyEmailThunk,
  setUserRole,
} from './operations';

const initialState: AuthInitialState = {
  role: null,
  userData: null,
  verifyEmail: false,
  authenticated: false,
  token: null,
  jwtToken: null,
  userId: null,
  email: null,
  error: null,
  isLoading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOutUser(state, _) {
      console.log('use logOutUser');
      state.isLoading = false;
      state.authenticated = false;
      // state.role = null;
      // state.verifyEmail = false;
      state.userData = null;
      state.jwtToken = null;
      state.error = null;
      state.userId = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(setUserRole, (state, { payload }) => {
        state.role = payload;
      })
      .addCase(getTokenThunk.fulfilled, (state, { payload }) => {
        console.log('payload in getTokenThunk', payload);
        state.isLoading = false;
        state.token = payload;
        state.error = null;
      })
      .addCase(postRegisterUserThunk.fulfilled, (state, { payload }) => {
        console.log('userData in slice', payload);
        state.isLoading = false;
        state.authenticated = false;
        state.userData = payload;
        state.error = null;
        state.userId = payload.dto.id;
      })
      .addCase(postResendVerifyCodeThunk.fulfilled, (state, _) => {
        state.isLoading = false;
        state.authenticated = false;
        state.error = null;
      })
      .addCase(postVerifyEmailThunk.fulfilled, (state, { payload }) => {
        console.log('response postVerifyEmailThank in slice', payload);
        state.isLoading = false;
        state.authenticated = false;
        state.verifyEmail = true;
        state.error = null;
      })
      .addCase(postLoginUserThunk.fulfilled, (state, { payload }) => {
        console.log('payload in postLoginUserThunk', payload);
        state.isLoading = false;
        state.authenticated = true;
        state.jwtToken = payload;
        state.error = null;
      })
      .addCase(getUserInfoThunk.fulfilled, (state, { payload }) => {
        console.log('payload in getUserInfoThunk', payload);
        state.isLoading = false;
        state.authenticated = true;
        state.userId = payload.id;
        state.email = payload.email;
        state.error = null;
      })
      .addCase(delParentAccountThunk.fulfilled, (state, _) => {
        state.isLoading = false;
        state.authenticated = false;
        state.role = null;
        state.verifyEmail = false;
        state.userData = null;
        state.token = null;
        state.jwtToken = null;
        state.error = null;
        state.userId = null;
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          console.log('action in error', action);
          state.isLoading = false;
          state.error = 'Error';
        }
      );
  },
});

export const { logOutUser } = slice.actions;

const authReducer = slice.reducer;

export default authReducer;
