import { createAction } from '@reduxjs/toolkit';

const setEnabled = createAction<boolean>('listening/setEnabled');

const setIsLoggedIn = createAction<boolean>('listening/setIsLoggedIn');

const setKidId = createAction<string>('listening/setKidId');

const setDeviceToken = createAction<string>('listening/setDeviceToken');

const setRecording = createAction<string>('listening/setRecording');

const setIsTriggerDetected = createAction<boolean>(
  'listening/setTriggerDetected'
);

export {
  setEnabled,
  setIsLoggedIn,
  setKidId,
  setDeviceToken,
  setRecording,
  setIsTriggerDetected,
};
