import { createSlice } from '@reduxjs/toolkit';
import type AuthInitialState from '../types/initialState';
import { getTokenThank, registerUser, setUserRole } from './operations';

const initialState: AuthInitialState = {
  role: null,
  userData: null,
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
      // -----------Register------------
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        console.log('userData in slice', payload);
        state.isLoading = false;
        state.authenticated = true;
        state.userData = payload;
        state.error = null;
      })
      .addCase(getTokenThank.fulfilled, (state, { payload }) => {
        console.log('token in slice', payload);
        state.isLoading = false;
        state.token = payload;
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
