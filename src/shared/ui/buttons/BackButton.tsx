import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import { styled } from 'nativewind';
import { AccessibilityRole, TouchableOpacity } from 'react-native';

interface BackButtonProps {
  hint?: string;
  label?: string;
  role?: AccessibilityRole;
  onPress?: () => void;
  classNames?: string;
  activeOpacity?: number;
  whiteIcon?: boolean;
}

const StyledButton = styled(TouchableOpacity);

const BackButton: React.FC<BackButtonProps> = ({
  hint,
  label,
  role,
  onPress,
  classNames,
  activeOpacity,
  whiteIcon,
}) => {
  return (
    <StyledButton
      accessibilityLabel={label || 'Повернутись назад'}
      accessibilityHint={
        hint || 'Повернутись на останню сторінку яку ви відвідували'
      }
      accessibilityRole={role || 'button'}
      accessible={true}
      onPress={onPress ? onPress : () => router.back()}
      className={`absolute top-16 left-4 z-10 ${classNames}`}
      activeOpacity={activeOpacity || 0.75}
    >
      <Entypo
        name="chevron-thin-left"
        size={24}
        color={whiteIcon ? '#fff' : '#000'}
      />
    </StyledButton>
  );
};

export default BackButton;
