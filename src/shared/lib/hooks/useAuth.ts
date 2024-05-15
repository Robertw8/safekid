import { selectUserRole } from '@/processes/auth';
import useAppSelector from './useAppSelector';

const useAuth = () => {
  const role = useAppSelector(selectUserRole);

  return { role };
};

export default useAuth;
