import {
  BackButton,
  PrimaryButton,
  PrimaryContainer,
  PrimaryModal,
  TertiaryTitle,
} from '@/shared/ui';
import { styled } from 'nativewind';
import { ActionKidList } from '@/widgets/adult';
import { KidStatus, IconName } from '@/shared/types';
import { useState } from 'react';
import { View } from 'react-native';

const BtnModal = styled(View);

const DeleteKidScreen: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handlePress = () => {
    handleModalOpen();
    console.log('Handle kid selection');
  };

  const kids = [
    {
      kidName: 'Олівія',
      status: 'active' as KidStatus,
      iconType: 'trash-outline' as IconName,
    },
    {
      kidName: 'Макс',
      status: 'error' as KidStatus,
      iconType: 'trash-outline' as IconName,
    },
    {
      kidName: 'Марта',
      status: 'inactive' as KidStatus,
      iconType: 'trash-outline' as IconName,
    },
  ];

  return (
    <>
      <PrimaryContainer classNames="justify-start">
        <BackButton />
        <TertiaryTitle classNames="mb-20 ml-16">
          Видалити акаунт дитини
        </TertiaryTitle>
        <ActionKidList
          kids={kids}
          onPress={handleModalOpen}
          accessibilityRole={'button'}
          accessibilityLabel={'видалити зі списку'}
          accessibilityHint={'натисніть щоб видалити дитину зі списку'}
        />
      </PrimaryContainer>

      <PrimaryModal
        visible={isModalOpen}
        header={'Ви впевнені, що хочете видалити акаунт дитини?'}
        body={
          'Якщо ви видалите акаунт дитини, то вона не буде більше прив’язана до вас, а її акаунт повністю буде видалено з системи додатку! Ви точно хоче видалити акаунт цієї дитини?'
        }
        footer={
          <BtnModal className="flex flex-row mt-10 ">
            <PrimaryButton
              text="Вийти"
              onPress={handlePress}
              classNames="mr-10 w-[120px] h-full bg-[#D9D9D9]"
              textClassNames="text-[#1A1A1C]"
            />
            <PrimaryButton
              text="Скасувати"
              onPress={() => handleModalOpen()}
              classNames="h-full bg-[#ACACAC]"
              textClassNames="text-[#1A1A1C]"
            />
          </BtnModal>
        }
      />
    </>
  );
};

export default DeleteKidScreen;
