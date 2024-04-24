import { styled } from 'nativewind';
import { View } from 'react-native';
import DelAccountBtn from '@/shared/ui/buttons/DelAccountBtn';
import { useState } from 'react';
// import { PrimaryModal } from '@/shared/ui';

const Wrapper = styled(View);

const DeleteAccounts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleDeleteAccountKid = () => {
    console.log('Акаунт видалений');
  };

  const handleDeleteAccountAdult = () => {
    console.log('Акаунт видалений');
  };
  return (
    <>
      <Wrapper className="flex mt-20">
        <DelAccountBtn
          text="Видалити акаунт дитини"
          onPress={handleModalOpen}
        />
        <DelAccountBtn
          text="Видалити акаунт дорослого"
          onPress={handleModalOpen}
        />
      </Wrapper>
      {/* {isModalOpen && (
        <PrimaryModal
          visible={true}
          onCancel={handleModalOpen}
          onConfirm={handleDeleteAccountKid}
        />
      )} */}
    </>
  );
};

export default DeleteAccounts;
