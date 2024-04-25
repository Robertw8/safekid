import { styled } from 'nativewind';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton, PrimaryModal } from '@/shared/ui';

const StyledBtn = styled(TouchableOpacity);
const StyledText = styled(Text);
const BtnModal = styled(View);

const Logout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const logout = () => {
    handleModalOpen();
    console.log('Вийшли з акаунта');
  };

  return (
    <>
      <StyledBtn
        onPress={logout}
        className="flex flex-row items-center gap-[16] mt-9"
      >
        <Ionicons name="log-out-outline" size={24} color="black" />
        <StyledText className="font-medium text-xl">Вийти з акаунту</StyledText>
      </StyledBtn>
      <PrimaryModal
        visible={isModalOpen}
        header={'Ви збираєтесь вийти з акаунту!'}
        body={
          'Якщо на пристроях прив’язаних до вас дітей-користувачів стоїть активний режим моніторінгу, ви будете все одно отримувати повідомлення про потенційну небезпеку.'
        }
        footer={
          <BtnModal className="flex flex-row mt-10 ">
            <PrimaryButton
              text="Вийти"
              onPress={logout}
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

export default Logout;
