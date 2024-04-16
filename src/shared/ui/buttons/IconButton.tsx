import { AccessibilityRole, TouchableOpacity } from 'react-native';
import Icon from '../graphics/Icon';
import { styled } from 'nativewind';

interface IconButtonProps {
  iconXml: string;
  onPress: () => void;
  hint: string;
  label: string;
  role?: AccessibilityRole;
  classNames?: string;
  iconClassNames?: string;
  activeOpacity?: number;
}

const StyledButton = styled(TouchableOpacity);

const IconButton: React.FC<IconButtonProps> = ({
  iconXml,
  onPress,
  hint,
  label,
  role,
  classNames,
  iconClassNames,
  activeOpacity,
}) => {
  return (
    <StyledButton
      accessibilityLabel={label}
      accessibilityHint={hint}
      accessibilityRole={role || 'button'}
      accessible={true}
      onPress={onPress}
      className={`${classNames}`}
      activeOpacity={activeOpacity || 0.75}
    >
      <Icon xml={iconXml} classNames={iconClassNames} />
    </StyledButton>
  );
};

export default IconButton;
