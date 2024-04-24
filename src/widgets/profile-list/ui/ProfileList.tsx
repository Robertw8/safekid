import { styled } from 'nativewind';
import { ItemLink } from '@/shared/ui';
import { FlatList, View } from 'react-native';
import { dataProfileList } from '@/entities/profile';

const Wrapper = styled(View);

const ProfileList: React.FC = () => {
  return (
    <Wrapper className="mt-14">
      <FlatList
        data={dataProfileList}
        renderItem={({ item }) => <ItemLink item={item} />}
        keyExtractor={item => String(item.title)}
      />
    </Wrapper>
  );
};

export default ProfileList;
