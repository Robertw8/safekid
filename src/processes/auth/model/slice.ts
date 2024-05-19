import { createSlice } from '@reduxjs/toolkit';
import type AuthInitialState from '../types/initialState';
import {
  delParentAccountThunk,
  // getTokenThunk,
  getUserInfoThunk,
  postLoginUserThunk,
  postRegisterUserThunk,
  postResendVerifyCodeThunk,
  postVerifyEmailThunk,
} from './operations';

const initialState: AuthInitialState = {
  userRole: null,
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
      state.userRole = null;
      state.verifyEmail = false;
      state.userData = null;
      state.jwtToken = null;
      state.error = null;
      state.userId = null;
    },
    setUser(state, { payload }) {
      console.log('email in setUser', payload);
      state.email = payload;
    },
  },
  extraReducers: builder => {
    builder
      // .addCase(getTokenThunk.fulfilled, (state, { payload }) => {
      //   console.log('payload in getTokenThunk', payload);
      //   state.isLoading = false;
      //   state.token = payload;
      //   state.error = null;
      // })
      .addCase(postRegisterUserThunk.fulfilled, (state, { payload }) => {
        console.log('userData in slice', payload);
        state.isLoading = false;
        state.authenticated = false;
        state.userData = payload;
        state.error = null;
        state.userId = payload.dto.id;
        state.token = payload.deviceToken;
        state.userRole = 'adult';
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
        state.userRole = 'adult';
      })
      .addCase(postLoginUserThunk.fulfilled, (state, { payload }) => {
        console.log('payload in postLoginUserThunk', payload);
        state.isLoading = false;
        state.authenticated = true;
        state.jwtToken = payload;
        state.error = null;
        state.token = payload.token;
        state.userRole = 'adult';
      })
      .addCase(getUserInfoThunk.fulfilled, (state, { payload }) => {
        console.log('payload in getUserInfoThunk', payload);
        state.isLoading = false;
        state.authenticated = true;
        state.userId = payload.id;
        state.email = payload.email;
        state.error = null;
        state.userRole = 'adult';
      })
      .addCase(delParentAccountThunk.fulfilled, (state, _) => {
        state.isLoading = false;
        state.authenticated = false;
        state.userRole = null;
        state.verifyEmail = false;
        state.userData = null;
        state.token = null;
        state.jwtToken = null;
        state.error = null;
        state.userId = null;
        state.email = null;
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

export const { logOutUser, setUser } = slice.actions;

const authReducer = slice.reducer;

export default authReducer;
