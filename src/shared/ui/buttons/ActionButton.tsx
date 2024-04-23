import { styled } from 'nativewind';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, AccessibilityRole } from 'react-native';

import { IconName } from '@/shared/types';

interface ActionButtonProps {
  iconName: IconName;
  onPress?: () => void;
  classNames?: string;
  accessibilityLabel: string;
  accessibilityHint: string;
  accessibilityRole: AccessibilityRole;
}

const Button = styled(TouchableOpacity);

const ActionButton: React.FC<ActionButtonProps> = ({
  onPress,
  classNames,
  iconName,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole,
}) => {
  return (
    <Button
      accessible={true}
      onPress={onPress}
      className={`m-2 ${classNames}`}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={accessibilityRole}
    >
      <Entypo name={iconName} size={24} color="black" />
    </Button>
  );
};

export default ActionButton;
