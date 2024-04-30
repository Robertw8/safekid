import ListKidsInitialState from '../types/initialState';
import { createSlice } from '@reduxjs/toolkit';
import { getListKids } from './operations';

const initialState: ListKidsInitialState = {
  kids: [],
  loading: false,
  error: null,
};

const listKidsSlice = createSlice({
  name: 'listKids',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getListKids.pending, state => {
        state.loading = true;
      })
      .addCase(getListKids.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.kids = action.payload;
      })
      .addCase(getListKids.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message ?? 'An error occurred';
      });
  },
});

const listKidsReducer = listKidsSlice.reducer;
export default listKidsReducer;
