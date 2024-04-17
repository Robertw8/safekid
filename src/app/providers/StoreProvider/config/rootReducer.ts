import { authReducer } from '@/processes/auth';
import { listeningReducer } from '@/processes/listening';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
  listening: listeningReducer,
});

export default rootReducer;
