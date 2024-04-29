import { createAction } from '@reduxjs/toolkit';

const setEnabled = createAction<boolean>('listening/setEnabled');

const setIsLoggedIn = createAction<boolean>('listening/setIsLoggedIn');

const setKidId = createAction<string>('listening/setKidId');

const setDeviceToken = createAction<string>('listening/setDeviceToken');

export { setEnabled, setIsLoggedIn, setKidId, setDeviceToken };
