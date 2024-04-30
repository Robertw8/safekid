import { createSlice } from '@reduxjs/toolkit';
import { sendKidData } from './operations';

import SendKidsInitialState from '../types/initialState';

const initialState: SendKidsInitialState = {
  loading: false,
  error: null,
};

const sendKidsSlice = createSlice({
  name: 'sendKids',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
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

const sendKidsReducer = sendKidsSlice.reducer;
export default sendKidsReducer;
