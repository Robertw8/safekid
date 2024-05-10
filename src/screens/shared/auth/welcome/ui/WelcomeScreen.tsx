import { useEffect } from 'react';
import { useAppDispatch, useAuth } from '@/shared/lib';
import { styled } from 'nativewind';
import { setUserRole } from '@/processes/auth';
import { router } from 'expo-router';
import { getTokenThunk } from '@/processes/auth/model/operations';

import { View } from 'react-native';
import { ClickableRoleCard } from '@/widgets/auth';
import {
  PrimaryContainer,
  SecondaryTitle,
  adultIcon,
  kidIcon,
} from '@/shared/ui';

const CardsWrapper = styled(View);

const WelcomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { role } = useAuth();

  useEffect(() => {
    dispatch(getTokenThunk());
  }, []);

  const handleAdultSelect = () => {
    dispatch(setUserRole('adult'));
    console.log('USER ROLE:', role);
    router.navigate('/auth/adult/login');
  };

  const handleKidSelect = () => {
    dispatch(setUserRole('kid'));
    console.log('USER ROLE:', role);
    router.navigate('/auth/kid/register');
  };

  return (
    <PrimaryContainer>
      <SecondaryTitle>Виберіть свою роль</SecondaryTitle>
      <CardsWrapper className="mt-8">
        <ClickableRoleCard
          iconXml={adultIcon}
          title="Дорослий"
          onPress={handleAdultSelect}
        />
        <ClickableRoleCard
          iconXml={kidIcon}
          title="Дитина"
          classNames="mt-4"
          onPress={handleKidSelect}
        />
      </CardsWrapper>
    </PrimaryContainer>
  );
};

export default WelcomeScreen;
