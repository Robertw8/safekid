import { useState } from 'react';
import { styled } from 'nativewind';
import { router } from 'expo-router';

import { SecondaryTitle } from '@/shared/ui';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const StyledButton = styled(TouchableOpacity);

const AddKidButton: React.FC = () => {
  const [listEmpty, setListEmpty] = useState(false);

  return (
    <>
      <StyledButton
        accessible
        accessibilityLabel="Add kid"
        accessibilityHint="Add kid to the list"
        accessibilityRole="button"
        activeOpacity={0.75}
        onPress={() => router.navigate('/adult/qr-code')}
        className={`${listEmpty ? 'w-24 h-24' : 'w-14 h-14 mt-auto'} rounded-full border-2 border-black mx-auto justify-center items-center`}
      >
        <AntDesign name="plus" size={listEmpty ? 56 : 32} color="#7D5DFF" />
      </StyledButton>
      <SecondaryTitle classNames="mt-2 text-center">
        Додати дитину
      </SecondaryTitle>
    </>
  );
};

export default AddKidButton;
