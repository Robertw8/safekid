import useAppSelector from './useAppSelector';
import {
  selectDeviceToken,
  selectEnabled,
  selectIsLoggedIn,
  selectKidId,
  selectRecording,
  selectIsTriggerDetected,
} from '@/features/listening';

const useListening = () => {
  const enabled = useAppSelector(selectEnabled);
  const kidId = useAppSelector(selectKidId);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const deviceToken = useAppSelector(selectDeviceToken);
  const recording = useAppSelector(selectRecording);
  const isTriggerDetected = useAppSelector(selectIsTriggerDetected);

  return {
    enabled,
    kidId,
    isLoggedIn,
    deviceToken,
    recording,
    isTriggerDetected,
  };
};

export default useListening;
