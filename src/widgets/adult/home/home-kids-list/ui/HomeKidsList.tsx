import { Link } from 'expo-router';
import { View } from 'react-native';
import HomeKidsItem from './HomeKidsItem';

import { useSelector } from 'react-redux';
import { selectListKids } from '@/features/get-list-kids/model/selectors';

// const kids = [{ key: 'Олівія' }, { key: 'Макс' }, { key: 'Марта' }];

const HomeKidsList: React.FC = () => {
  const kids = useSelector(selectListKids);

  return (
    <View>
      {kids.map(kid => (
        <HomeKidsItem kidName={kid.userName} key={kid.id} status={'inactive'} />
      ))}
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
