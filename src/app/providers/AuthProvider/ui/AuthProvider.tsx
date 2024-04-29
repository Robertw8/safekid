import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib';
import { setDeviceToken } from '@/features/listening';
import { getDeviceToken } from '@/shared/api';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const deviceToken = await getDeviceToken();

      dispatch(setDeviceToken(deviceToken));
    })();
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
