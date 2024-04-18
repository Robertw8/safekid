import { createSlice } from '@reduxjs/toolkit';
import ListeningInitialState from '../types/initialState';
import { setEnabled } from './operations';

const initialState: ListeningInitialState = {
  enabled: false,
};

const slice = createSlice({
  name: 'listening',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setEnabled, (state, { payload }) => {
      state.enabled = payload;
    });
  },
});

const listeningReducer = slice.reducer;
export default listeningReducer;
