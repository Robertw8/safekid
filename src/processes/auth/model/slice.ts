import { createSlice } from '@reduxjs/toolkit';
import type AuthInitialState from '../types/initialState';
import { getTokenThank, postRegisterUserThank, postVerifyEmailThank, setUserRole } from './operations';

const initialState: AuthInitialState = {
  role: null,
  userData: null,
  verifyEmail: false,
  error: null,
  isLoading: false,
  authenticated: false,
  token: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setUserRole, (state, { payload }) => {
        state.role = payload;
      })
      .addCase(getTokenThank.fulfilled, (state, { payload }) => {
        console.log('token in slice', payload);
        state.isLoading = false;
        state.token = payload;
        state.error = null;
      })
      .addCase(postRegisterUserThank.fulfilled, (state, { payload }) => {
        console.log('userData in slice', payload);
        state.isLoading = false;
        state.authenticated = false;
        state.userData = payload;
        state.error = null;
      })
      .addCase(postVerifyEmailThank.fulfilled, (state, { payload }) => {
        console.log('response postVerifyEmailThank in slice', payload);
        state.isLoading = false;
        state.authenticated = true;
        state.verifyEmail = true;
        state.error = null;
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          console.log('action in error', action);
          state.isLoading = false;
          state.error = "ERROR";
        },
      )
  },
});

const authReducer = slice.reducer;
export default authReducer;
