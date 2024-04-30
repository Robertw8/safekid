import useAppSelector from './useAppSelector';
import {
  selectDeviceToken,
  selectEnabled,
  selectIsLoggedIn,
  selectKidId,
} from '@/features/listening';

const useListening = () => {
  const enabled = useAppSelector(selectEnabled);
  const kidId = useAppSelector(selectKidId);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const deviceToken = useAppSelector(selectDeviceToken);

  return { enabled, kidId, isLoggedIn, deviceToken };
};

export default useListening;
