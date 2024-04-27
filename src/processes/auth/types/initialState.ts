interface User {
    email: string;
    password: string;
    deviceToken: string;
};

export default interface AuthInitialState {
  role: 'kid' | 'adult' | null;
  userData: null | User;
  error: null | string,
  isLoading: boolean,
  authenticated: boolean,
  token: null | string,
};
