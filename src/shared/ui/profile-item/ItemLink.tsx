import { styled } from 'nativewind';
import { Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

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
const Button = styled(Text);

const ItemLink: React.FC<ItemLinkProps> = ({
  item,

  textClassNames,
}) => {
  const { title, route, icon } = item;

  const handlePress = () => {
    router.navigate(route);
  };

  return (
    <Wrapper className="flex gap-y-6">
      <ItemWrap className="flex flex-row items-center gap-y-6">
        <Icon>{icon}</Icon>
        <TouchableOpacity onPress={handlePress}>
          <Button className={`font-medium text-xl ml-4 ${textClassNames}`}>
            {title}
          </Button>
        </TouchableOpacity>
      </ItemWrap>
    </Wrapper>
  );
};

export default ItemLink;
