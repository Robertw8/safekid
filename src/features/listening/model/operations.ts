import { createAction } from '@reduxjs/toolkit';

const setEnabled = createAction<boolean>('listening/setEnabled');

export { setEnabled };
