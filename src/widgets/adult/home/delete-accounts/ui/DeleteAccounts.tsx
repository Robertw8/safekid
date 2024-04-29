import { styled } from 'nativewind';
import { View } from 'react-native';
import { useState } from 'react';

import DelAccountBtn from '@/shared/ui/buttons/DelAccountBtn';
import ModalForDelAccount from './ModalForDelAccount';
import { router } from 'expo-router';
import { useAppDispatch } from '@/shared/lib';
import { delParentAccountThunk } from '@/processes/auth/model/operations';

const Wrapper = styled(View);

const DeleteAccounts: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonId, setButtonId] = useState('');

  const handleModalOpen = (id: string) => {
    setButtonId(id);
    setIsModalOpen(!isModalOpen);
  };
  const handleDeleteAccountKid = () => {
    console.log('Акаунт видалений');
    handleModalOpen('kid');
  };

  const handleDeleteAccountAdult = () => {
    dispatch(delParentAccountThunk({}));
    console.log('Акаунт видалений');
    handleModalOpen('adult');
  };

  return (
    <>
      <Wrapper className="flex mt-20">
        <DelAccountBtn
          id="kid"
          role="button"
          label="Видалити акаунт дитини"
          hint="При натисканні видаляється акаунт дитини"
          text="Видалити акаунт дитини"
          onPress={() => router.navigate('/adult/delete-kid')}
          accessible={true}
        />
        <DelAccountBtn
          id="adult"
          role="button"
          label="Видалити акаунт дорослого"
          hint="При натисканні видаляється акаунт дорослого"
          text="Видалити акаунт дорослого"
          onPress={() => handleModalOpen('adult')}
          accessible={true}
        />
      </Wrapper>

      <ModalForDelAccount
        isModalOpen={isModalOpen}
        buttonId={buttonId}
        handleDeleteAccountKid={handleDeleteAccountKid}
        handleDeleteAccountAdult={handleDeleteAccountAdult}
        handleModalOpen={handleModalOpen}
      />
    </>
  );
};

export default DeleteAccounts;
