import { styled } from 'nativewind';
import { PrimaryButton, PrimaryModal } from '@/shared/ui';
import { View } from 'react-native';
import { modalText } from '@/entities/profile';

const BtnModal = styled(View);

const ModalForDelAccount = ({
  isModalOpen,
  buttonId,
  handleDeleteAccountKid,
  handleDeleteAccountAdult,
  handleModalOpen,
}) => {
  return (
    <PrimaryModal
      visible={isModalOpen}
      header={modalText[buttonId]?.title}
      body={modalText[buttonId]?.text}
      footer={
        <BtnModal className="flex flex-row mt-10 ">
          <PrimaryButton
            text="Видалити"
            onPress={
              buttonId === 'kid'
                ? handleDeleteAccountKid
                : handleDeleteAccountAdult
            }
            classNames="mr-10 h-full bg-[#D9D9D9]"
            textClassNames="text-[#1A1A1C]"
          />
          <PrimaryButton
            text="Скасувати"
            onPress={() => handleModalOpen('')}
            classNames="h-full bg-[#ACACAC]"
            textClassNames="text-[#1A1A1C]"
          />
        </BtnModal>
      }
    />
  );
};

export default ModalForDelAccount;
