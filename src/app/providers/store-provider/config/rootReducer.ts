import { authReducer } from '@/processes/auth';
import { sendKidsReducer } from '@/features/send-kids';
import { listeningReducer } from '@/features/listening';

import { registerKidsReducer } from '@/features/register-kids';
import { deleteKidsReducer } from '@/features/delete-kids';
import { parentInfoReducer } from '@/features/user-info';

import { combineReducers } from '@reduxjs/toolkit';
import { listKidsReducer } from '@/features/get-list-kids';
import persistReducer from 'redux-persist/es/persistReducer';
import authPersistConfig from './authPersistConfig';

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  listKids: listKidsReducer,
  sendKids: sendKidsReducer,
  registerKids: registerKidsReducer,
  kidsDelete: deleteKidsReducer,
  listening: listeningReducer,
  parentInfo: parentInfoReducer,
});

export default rootReducer;
