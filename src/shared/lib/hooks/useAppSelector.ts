import { useSelector } from 'react-redux';
import type { RootState } from '@/app/providers/StoreProvider/config';

const useAppSelector = useSelector.withTypes<RootState>();

export default useAppSelector;
