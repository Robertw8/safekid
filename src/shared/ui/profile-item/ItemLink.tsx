import { styled } from 'nativewind';
import { TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import TertiaryTitle from '../typography/TertiaryTitle';

interface ItemLinkProps {
  item: {
    title: string;
    route: string;
    icon: JSX.Element;
  };
  textClassNames?: string;
}

const Wrapper = styled(View);
const ItemWrap = styled(View);
const Icon = styled(View);

const ItemLink: React.FC<ItemLinkProps> = ({ item }) => {
  const { title, route, icon } = item;

  const handlePress = () => {
    router.navigate(route);
  };

  return (
    <Wrapper className="flex gap-y-6">
      <ItemWrap className="flex flex-row items-center gap-y-6">
        <Icon>{icon}</Icon>
        <TouchableOpacity onPress={handlePress}>
          <TertiaryTitle classNames="ml-4">{title}</TertiaryTitle>
        </TouchableOpacity>
      </ItemWrap>
    </Wrapper>
  );
};

export default ItemLink;
