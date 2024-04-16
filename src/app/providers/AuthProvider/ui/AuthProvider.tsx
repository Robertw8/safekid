import { useEffect } from 'react';
import { getDeviceToken } from '@/processes/auth';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  useEffect(() => {
    getDeviceToken().then(token => console.log('DEVICE TOKEN:', token)); // ! temp
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
