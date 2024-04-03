import { styled } from 'nativewind';
import { AccessibilityRole, Text, TouchableOpacity } from 'react-native';

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
  hint?: string;
  label?: string;
  role?: AccessibilityRole;
  classNames?: string;
  textClassNames?: string;
  activeOpacity?: number;
}

const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  label,
  hint,
  role,
  onPress,
  classNames,
  textClassNames,
  activeOpacity,
}) => {
  return (
    <StyledButton
      accessibilityLabel={label}
      accessibilityHint={hint}
      accessibilityRole={role}
      onPress={onPress}
      className={`bg-gray-500 px-4 py-2 rounded-lg flex flex-row justify-center items-center ${classNames}`}
      activeOpacity={activeOpacity || 0.75}
    >
      <StyledText className={`font-semibold text-base ${textClassNames}`}>
        {text}
      </StyledText>
    </StyledButton>
  );
};

export default PrimaryButton;
