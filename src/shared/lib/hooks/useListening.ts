import { selectEnabled } from '@/processes/listening';
import { useSelector } from 'react-redux';

const useListening = () => {
  const enabled = useSelector(selectEnabled);

  return { enabled };
};

export default useListening;
