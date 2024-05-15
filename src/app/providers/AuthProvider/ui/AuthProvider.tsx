import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { getUserInfoThunk } from '@/processes/auth/model/operations';
import {
  selectJwtToken,
  selectUserRole,
} from '@/processes/auth/model/selectors';
import { router } from 'expo-router';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const jwtToken = useAppSelector(selectJwtToken);
  const userRole = useAppSelector(selectUserRole);

  useEffect(() => {
    (async () => {
      // dispatch(getUserInfoThunk({ token: jwtToken as string }));

      if (jwtToken && userRole === 'adult') {
        router.navigate('/adult/dashboard');
      } else {
        router.navigate('/auth/welcome');
      }
    })();
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
