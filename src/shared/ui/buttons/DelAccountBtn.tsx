import { styled } from 'nativewind';
import { Text, TouchableOpacity, AccessibilityRole } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

interface DelAccountBtnProps {
  text: string;
  onPress: () => void;
  accessible?: boolean;
  hint?: string;
  label?: string;
  role?: AccessibilityRole;
  classNames?: string;
  textClassNames?: string;
}

const StyledBtn = styled(TouchableOpacity);
const StyledText = styled(Text);

const DelAccountBtn: React.FC<DelAccountBtnProps> = ({
  accessible,
  label,
  hint,
  role,
  onPress,
  text,
  classNames,
  textClassNames,
}) => {
  return (
    <StyledBtn
      accessibilityLabel={label}
      accessibilityHint={hint}
      accessibilityRole={role || 'button'}
      accessible={accessible || true}
      onPress={onPress}
      className={`flex-row gap-[16] ${classNames}`}
    >
      <FontAwesome5 name="trash-alt" size={24} color="black" />
      <StyledText
        className={`font-medium text-lg text-black mb-6 underline decoration-solid ${textClassNames}`}
      >
        {text}
      </StyledText>
    </StyledBtn>
  );
};

export default DelAccountBtn;
