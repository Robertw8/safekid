import { View } from 'react-native';
import HomeKidsItem from './HomeKidsItem';

const kids = [{ key: 'Олівія' }, { key: 'Макс' }, { key: 'Марта' }];

const HomeKidsList: React.FC = () => {
  return (
    <View>
      {kids.map(({ key }, index) => (
        <HomeKidsItem kidName={key} key={index} status={'inactive'} />
      ))}
    </View>
  );
};

export default HomeKidsList;
