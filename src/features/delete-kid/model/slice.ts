import { createSlice } from '@reduxjs/toolkit';
import { deleteKid } from './operations';

import KidsInitialState from '../types/initialState';

const initialState: KidsInitialState = {
  loading: false,
  error: null,
};

const kidsDeleteSlice = createSlice({
  name: 'kidsDelete',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(deleteKid.pending, state => {
        state.loading = true;
      })
      .addCase(deleteKid.fulfilled, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteKid.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message ?? null;
      });
  },
});

const kidsDeleteReducer = kidsDeleteSlice.reducer;
export default kidsDeleteReducer;
