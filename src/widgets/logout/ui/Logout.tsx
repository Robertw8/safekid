import { styled } from 'nativewind';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StyledBtn = styled(TouchableOpacity);
const StyledText = styled(Text);

const Logout: React.FC = () => {
  const logout = () => {
    console.log('Вийшли з акаунта');
  };
  return (
    <StyledBtn
      onPress={logout}
      className="flex flex-row items-center gap-[16] mt-9"
    >
      <Ionicons name="log-out-outline" size={24} color="black" />
      <StyledText className="font-medium text-xl text-black">
        Вийти з акаунту
      </StyledText>
    </StyledBtn>
  );
};

export default Logout;
