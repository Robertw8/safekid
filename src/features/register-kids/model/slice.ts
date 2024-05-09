import { createSlice } from '@reduxjs/toolkit';
import { registerKid } from './operations';

import registerKidsInitialState from '../types/initialState';

const initialState: registerKidsInitialState = {
  loading: false,
  error: null,
};

const registerKidsSlice = createSlice({
  name: 'registerKids',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerKid.pending, state => {
        state.loading = true;
      })
      .addCase(registerKid.fulfilled, state => {
        state.loading = false;
      })
      .addCase(registerKid.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || null;
      });
  },
});

const registerKidsReducer = registerKidsSlice.reducer;
export default registerKidsReducer;
