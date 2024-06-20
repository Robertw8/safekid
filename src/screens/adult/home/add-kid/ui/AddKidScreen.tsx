import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  BackButton,
  PrimaryButton,
  PrimaryContainer,
  PrimaryInput,
  TertiaryTitle,
} from '@/shared/ui';
import { AvatarsList } from '@/widgets/adult';

import { registerKid } from '@/features/register-kids/model/operations';
// import useListening from '@/shared/lib/hooks/useListening';
import useAppSelector from '@/shared/lib/hooks/useAppSelector';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch';
import { selectUserId } from '@/processes/auth/model/selectors';

interface AddKidProps {
  classNames?: string;
  parentId: string | null;
  deviceId: string;
}

const AddKidScreen: React.FC<AddKidProps> = ({ classNames }) => {
  const [name, setName] = useState('');
  // const { deviceToken } = useListening();
  const userId = useAppSelector(selectUserId);
  const dispatch = useAppDispatch();

  const handlePress = async () => {
    const deviceToken = uuidv4();
    console.log('add kid', name);
    console.log('User ID:', userId);
    console.log('Device Token:', deviceToken);
    try {
      const result = await dispatch(
        registerKid({
          parentId: userId,
          mobileTitle: name,
          deviceId: deviceToken,
        })
      ).unwrap();
      console.log('Result from server:', result);
    } catch (error) {
      console.error('Error registering kid:', error);
    }
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  return (
    <PrimaryContainer classNames={`justify-start ${classNames}`}>
      <BackButton />
      <TertiaryTitle classNames="mb-16 ml-16">Додати дитину</TertiaryTitle>
      <TertiaryTitle classNames="mb-4 ml-4">Введіть ім’я дитини</TertiaryTitle>
      <PrimaryInput
        classNames="mb-10"
        onChangeText={handleNameChange}
        value={name}
        placeholder="Введіть ім’я"
      />
      <AvatarsList />
      <PrimaryButton
        classNames="mt-8 ml-20 w-48 bg-[#ACACAC]"
        textClassNames="text-[#1A1A1C]"
        text="Додати дитину"
        onPress={handlePress}
        label="Додати нову дитину"
        hint="Натисніть для додавання дитини в систему"
      />
    </PrimaryContainer>
  );
};

export default AddKidScreen;
