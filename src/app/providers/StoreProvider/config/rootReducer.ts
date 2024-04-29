import { authReducer } from '@/processes/auth';
import { kidsReducer } from '@/features/kids';
import { listeningReducer } from '@/features/listening';

import { kidsDeleteReducer } from '@/features/delete-kid';

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
  kids: kidsReducer,
  kidsDelete: kidsDeleteReducer,
  listening: listeningReducer,
});

export default rootReducer;
