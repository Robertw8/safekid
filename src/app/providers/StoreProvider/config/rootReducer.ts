import { authReducer } from '@/processes/auth';
import { sendKidsReducer } from '@/features/send-kids';
import { listeningReducer } from '@/features/listening';

import { registerKidsReducer } from '@/features/register-kids';
import { deleteKidsReducer } from '@/features/delete-kids';
import { combineReducers } from '@reduxjs/toolkit';

import { listKidsReducer } from '@/features/get-list-kids';

const rootReducer = combineReducers({
  auth: authReducer,
  listKids: listKidsReducer,
  sendKids: sendKidsReducer,
  registerKids: registerKidsReducer,
  kidsDelete: deleteKidsReducer,
  listening: listeningReducer,
});

export default rootReducer;
