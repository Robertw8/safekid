import { styled } from 'nativewind';
import { ItemLink } from '@/shared/ui';
import { FlatList, View } from 'react-native';
import { informationListData } from '@/entities/information';

const Wrapper = styled(View);

const InformationList: React.FC = () => {
  return (
    <Wrapper className="mt-8">
      <FlatList
        data={informationListData}
        renderItem={({ item }) => <ItemLink item={item} />}
        keyExtractor={item => String(item.title)}
      />
    </Wrapper>
  );
};

export default InformationList;
