import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/app/providers/StoreProvider/config';

const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default useAppDispatch;
