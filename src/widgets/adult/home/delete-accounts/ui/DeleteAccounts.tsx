import { styled } from 'nativewind';
import { View } from 'react-native';
import { useState } from 'react';

import { router } from 'expo-router';
import { useAppDispatch } from '@/shared/lib';
import { ActionButton } from '@/shared/ui';
import ModalForDelAccount from './ModalForDelAccount';
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
    handleModalOpen('adult');
    router.navigate('/auth/welcome' as `${string}:${string}`);
  };

  return (
    <>
      <Wrapper className="mt-20">
        <ActionButton
          iconName="trash-outline"
          accessibilityLabel="Видалити акаунт дитини"
          accessibilityHint="При натисканні видаляється акаунт дитини"
          accessibilityRole="button"
          text="Видалити акаунт дитини"
          classNames="m-0 mb-6"
          textClassNames="ml-4"
          onPress={() => router.navigate('/adult/delete-kid')}
        />
        <ActionButton
          iconName="trash-outline"
          accessibilityLabel="Видалити акаунт дорослого"
          accessibilityHint="При натисканні видаляється акаунт дорослого"
          accessibilityRole="button"
          text="Видалити акаунт дорослого"
          classNames="m-0"
          textClassNames="ml-4"
          onPress={() => handleModalOpen('adult')}
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
