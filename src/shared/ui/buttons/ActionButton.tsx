import { styled } from 'nativewind';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, AccessibilityRole } from 'react-native';

import { IconName } from '@/shared/types';

const iconPack = {
  'chevron-thin-right': Entypo,
  'trash-outline': Ionicons,
  // prettier-ignore
  'form': AntDesign,
};

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
  const IconComponent = iconPack[iconName];

  return (
    <Button
      accessible={true}
      onPress={onPress}
      className={`m-2 ${classNames}`}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={accessibilityRole}
    >
      <IconComponent name={iconName as any} size={24} color="black" />
    </Button>
  );
};

export default ActionButton;
