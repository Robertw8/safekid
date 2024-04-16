import { authReducer } from '@/processes/auth';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
