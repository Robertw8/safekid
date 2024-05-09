import { createSlice } from '@reduxjs/toolkit';
import ListeningInitialState from '../types/initialState';
import {
  setDeviceToken,
  setEnabled,
  setIsLoggedIn,
  setKidId,
  setRecording,
  setIsTriggerDetected,
} from './operations';

const initialState: ListeningInitialState = {
  enabled: false,
  isLoggedIn: false,
  kidId: null,
  deviceToken: null,
  recording: '',
  isTriggerDetected: false,
};

const slice = createSlice({
  name: 'listening',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setEnabled, (state, { payload }) => {
        state.enabled = payload;
      })
      .addCase(setIsLoggedIn, (state, { payload }) => {
        state.isLoggedIn = payload;
      })
      .addCase(setKidId, (state, { payload }) => {
        state.kidId = payload;
      })
      .addCase(setDeviceToken, (state, { payload }) => {
        state.deviceToken = payload;
      })
      .addCase(setRecording, (state, { payload }) => {
        state.recording = payload;
      })
      .addCase(setIsTriggerDetected, (state, { payload }) => {
        state.isTriggerDetected = payload;
      });
  },
});

const listeningReducer = slice.reducer;
export default listeningReducer;
