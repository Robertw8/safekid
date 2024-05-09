import React, { useState } from 'react';
import {
  BackButton,
  PrimaryButton,
  PrimaryContainer,
  PrimaryInput,
  TertiaryTitle,
} from '@/shared/ui';
import { AvatarsList } from '@/widgets/adult';

interface AddKidProps {
  classNames?: string;
}

const AddKidScreen: React.FC<AddKidProps> = ({ classNames }) => {
  const [name, setName] = useState('');

  const handlePress = () => {
    console.log('add kid', name);
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
