import { getDeviceToken } from '@/features/listening';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setUserRole = createAction<'kid' | 'adult' | null>('auth/setUserRole');

export { setUserRole };

const instance = axios.create({
  baseURL: 'https://drake-singular-severely.ngrok-free.app/',
});

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (dataUser, thunkApi) => {
    try {
      const response = await instance.post('users/registration', dataUser);
console.log('response.data =>', response.data);
      return response.data;
    } catch (error) {
      alert(
        `Oops! Something was wrong...`,
      );
      return thunkApi.rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
    }
  },
);

export const getTokenThank = createAsyncThunk(
    'auth/token',
    getDeviceToken,
)


