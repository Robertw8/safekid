import * as Notifications from 'expo-notifications';

export default interface AuthInitialState {
  userRole: 'kid' | 'adult' | null;
  verifyEmail: boolean;
  error: null | string;
  isLoading: boolean;
  authenticated: boolean;
  token: Notifications.ExpoPushToken | null;
  jwtToken: null | string;
  userId: null | string;
  email: null | string;
  resetCodeSent: boolean;
}
