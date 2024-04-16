import { selectRole } from '@/processes/auth';
import useAppSelector from './useAppSelector';

const useAuth = () => {
  const role = useAppSelector(selectRole);

  return { role };
};

export default useAuth;
