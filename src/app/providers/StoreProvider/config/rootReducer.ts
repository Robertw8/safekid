import { authReducer } from '@/processes/auth';
import { listeningReducer } from '@/features/listening';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
  listening: listeningReducer,
});

export default rootReducer;
