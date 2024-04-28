import { authReducer } from '@/processes/auth';
import { kidsReducer } from '@/features/kids';
import { listeningReducer } from '@/features/listening';

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
  kids: kidsReducer,
  listening: listeningReducer,
});

export default rootReducer;
