import { styled } from 'nativewind';
import { router } from 'expo-router';

import { TouchableOpacity, View } from 'react-native';
import TertiaryTitle from '../typography/TertiaryTitle';

interface ItemLinkProps {
  item: {
    title: string;
    route: string;
    icon: JSX.Element;
  };
  textClassNames?: string;
}

const Container = styled(View);
const Item = styled(TouchableOpacity);
const Wrapper = styled(View);
const Icon = styled(View);

const ItemLink: React.FC<ItemLinkProps> = ({ item }) => {
  const { title, route, icon } = item;

  const handlePress = () => {
    router.navigate(route);
  };

  return (
    <Container className="flex gap-6">
      <Wrapper className="flex flex-row gap-y-6">
        <Item onPress={handlePress} className="flex flex-row items-center">
          <Icon>{icon}</Icon>
          <TertiaryTitle classNames="ml-4">{title}</TertiaryTitle>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default ItemLink;
