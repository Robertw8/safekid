import { Icon } from '@/shared/ui';
import { styled } from 'nativewind';
import { Text, TouchableOpacity, View } from 'react-native';

interface ClickableRoleCardProps {
  title: string;
  description: string;
  onPress: () => void;
  iconXml: string;
  classNames?: string;
  iconClassNames?: string;
  activeOpacity?: number;
}

const StyledButton = styled(TouchableOpacity);
const TextWrapper = styled(View);
const Title = styled(Text);
const Description = styled(Text);

const ClickableRoleCard: React.FC<ClickableRoleCardProps> = ({
  title,
  description,
  iconXml,
  classNames,
  iconClassNames,
  activeOpacity,
  onPress,
}) => {
  return (
    <StyledButton
      className={`border border-black-20 rounded-2xl px-2 py-4 flex-row w-full ${classNames}`}
      activeOpacity={activeOpacity || 0.75}
      onPress={onPress}
    >
      <TextWrapper>
        <Title className="font-medium text-xl text-black-primary">
          {title}
        </Title>
        <Description className="text-base text-gray-primary">
          {description}
        </Description>
      </TextWrapper>
      <Icon xml={iconXml} classNames={`ml-2 ${iconClassNames}`} />
    </StyledButton>
  );
};

export default ClickableRoleCard;
