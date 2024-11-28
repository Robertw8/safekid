import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import HomeKidsItem from './HomeKidsItem';

import { useEffect } from 'react';
import { selectListKids } from '@/features/get-list-kids/model/selectors';
import { getListKids } from '@/features/get-list-kids/model/operations';

import useAppSelector from '@/shared/lib/hooks/useAppSelector';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch';

const HomeKidsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const kids = useAppSelector(selectListKids);

  useEffect(() => {
    console.log('Dispatching getListKids');
    dispatch(getListKids(''));
  }, [dispatch]);

  useEffect(() => {
    console.log('Kids list:', kids);
  }, [kids]);

  return (
    <View>
      {kids.length > 0 ? (
        kids.map(kid => (
          <HomeKidsItem
            kidName={kid.userName}
            key={kid.id}
            status={'inactive'}
          />
        ))
      ) : (
        <Text>No kids available</Text>
      )}
      <Link
        href="/adult/reconnect-kid"
        className="ml-1 mt-4 w-64 font-normal underline text-base text-gray-primary"
      >
        Відновити зв'язок з існуючим акаунтом дитини
      </Link>
    </View>
  );
};

export default HomeKidsList;
