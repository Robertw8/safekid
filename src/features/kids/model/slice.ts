import { createSlice } from '@reduxjs/toolkit';
import { registerKid, sendKidData } from './operations';

import KidsInitialState from '../types/initialState';

const initialState: KidsInitialState = {
  loading: false,
  error: null,
};

const kidsSlice = createSlice({
  name: 'kids',
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
        state.error = action.error?.message ?? null;
      })
      .addCase(sendKidData.pending, state => {
        state.loading = true;
      })
      .addCase(sendKidData.fulfilled, state => {
        state.loading = false;
      })
      .addCase(sendKidData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message ?? null;
      });
  },
});

const kidsReducer = kidsSlice.reducer;
export default kidsReducer;
