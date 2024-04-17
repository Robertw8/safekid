import { createSlice } from '@reduxjs/toolkit';
import type AuthInitialState from '../types/initialState';
import { setUserRole } from './operations';

const initialState: AuthInitialState = {
  role: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setUserRole, (state, { payload }) => {
      state.role = payload;
    });
  },
});

const authReducer = slice.reducer;
export default authReducer;
