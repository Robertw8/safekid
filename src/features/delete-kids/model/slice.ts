import { createSlice } from '@reduxjs/toolkit';
import { deleteKids } from './operations';

import DeleteKidsInitialState from '../types/initialState';

const initialState: DeleteKidsInitialState = {
  loading: false,
  error: null,
};

const deleteKidsSlice = createSlice({
  name: 'kidsDelete',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(deleteKids.pending, state => {
        state.loading = true;
      })
      .addCase(deleteKids.fulfilled, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteKids.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message ?? null;
      });
  },
});

const deleteKidsReducer = deleteKidsSlice.reducer;
export default deleteKidsReducer;
