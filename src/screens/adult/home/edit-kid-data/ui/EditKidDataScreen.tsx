import React, { useState } from 'react';
import {
  BackButton,
  PrimaryButton,
  PrimaryContainer,
  PrimaryInput,
  TertiaryTitle,
} from '@/shared/ui';
import { AvatarsList } from '@/widgets/adult';
import { router } from 'expo-router';

interface EditKidDataProps {
  classNames?: string;
}

const EditKidDataScreen: React.FC<EditKidDataProps> = ({ classNames }) => {
  const [name, setName] = useState('');

  const handleSave = () => {
    console.log('Save kid', name);
  };

  const handleCancel = () => {
    console.log('Cancel editing');
    router.navigate('/adult/edit-kid-list');
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  return (
    <PrimaryContainer classNames={`justify-start ${classNames}`}>
      <BackButton />
      <TertiaryTitle classNames="mb-16 ml-16">
        Редагувати дані дитини
      </TertiaryTitle>
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
        text="Зберегти зміни"
        onPress={handleSave}
        label="Редагування даних дитини"
        hint="Натисніть, щоб оновити дані дитини"
      />
      <PrimaryButton
        classNames="mt-8 ml-20 w-48 bg-[#ACACAC]"
        textClassNames="text-[#1A1A1C]"
        text="Відмінити"
        onPress={handleCancel}
        label="Відмінити редагування даних дитини"
        hint="Натисніть щоб відмінити редагування даних дитини"
      />
    </PrimaryContainer>
  );
};

export default EditKidDataScreen;
