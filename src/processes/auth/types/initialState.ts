interface User {
  dto: {
    email: string;
    password: string;
    deviceToken: string;
    id: string;
  };
  message: string;
};

export default interface AuthInitialState {
  role: 'kid' | 'adult' | null;
  userData: null | User;
  error: null | string,
  isLoading: boolean,
  authenticated: boolean,
  token: null | string,
};
