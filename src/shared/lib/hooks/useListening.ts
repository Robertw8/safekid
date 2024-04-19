import { useSelector } from 'react-redux';
import { selectEnabled } from '@/features/listening';

const useListening = () => {
  const enabled = useSelector(selectEnabled);

  return { enabled };
};

export default useListening;
