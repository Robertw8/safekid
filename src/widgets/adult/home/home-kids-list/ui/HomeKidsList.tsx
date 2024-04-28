import { View } from 'react-native';
import HomeKidsItem from './HomeKidsItem';

import { Link } from 'expo-router';

const kids = [{ key: 'Олівія' }, { key: 'Макс' }, { key: 'Марта' }];

const HomeKidsList: React.FC = () => {
  return (
    <View>
      {kids.map(({ key }, index) => (
        <HomeKidsItem kidName={key} key={index} status={'inactive'} />
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
