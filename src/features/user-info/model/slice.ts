import { createSlice } from '@reduxjs/toolkit';
import ParentInfoInitialState from '../types/initialState';
import { parentInfo } from './operations';

const initialState: ParentInfoInitialState = {
  email: null,
  loading: false,
  error: null,
};

const parentInfoSlice = createSlice({
  name: 'parentInfo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(parentInfo.pending, state => {
        state.loading = true;
      })
      .addCase(parentInfo.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.loading = false;
        state.error = null;
      })
      .addCase(parentInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message ?? null;
      });
  },
});

const parentInfoReducer = parentInfoSlice.reducer;
export default parentInfoReducer;
