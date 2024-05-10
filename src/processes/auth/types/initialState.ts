import * as Notifications from 'expo-notifications';

interface User {
  dto: {
    email: string;
    password: string;
    deviceToken: string;
    id: string;
  };
  message: string;
}

export default interface AuthInitialState {
  userRole: 'kid' | 'adult' | null;
  userData: null | User;
  verifyEmail: boolean;
  error: null | string;
  isLoading: boolean;
  authenticated: boolean;
  token: Notifications.ExpoPushToken | null;
  jwtToken: null | string;
  userId: null | string;
  email: null | string;
}
