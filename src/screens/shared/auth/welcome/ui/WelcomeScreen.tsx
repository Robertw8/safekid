import { useAppDispatch, useAuth } from '@/shared/lib';
import { styled } from 'nativewind';
import { setUserRole } from '@/processes/auth';

import { View } from 'react-native';
import { Link, router } from 'expo-router';
import { ClickableRoleCard } from '@/widgets/auth';
import {
  PrimaryContainer,
  SecondaryTitle,
  adultIcon,
  kidIcon,
} from '@/shared/ui';
import { useEffect } from 'react';
import { getTokenThunk } from '@/processes/auth/model/operations';
const CardsWrapper = styled(View);

const WelcomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { role } = useAuth();

  useEffect(() => {
    console.log('useEffect in WelcomeScreen');
    dispatch(getTokenThunk())
  }, []);

  const handleAdultSelect = () => {
    dispatch(setUserRole('adult'));
    console.log('USER ROLE:', role);
    router.navigate('/auth/adult/login');
  };

  const handleKidSelect = () => {
    dispatch(setUserRole('kid'));
    console.log('USER ROLE:', role);
    router.navigate('/auth/kid/scan');
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
      <Link href="/adult/dashboard" style={{ marginTop: 20, color: 'green' }}>
        Dashboard
      </Link>
    </PrimaryContainer>
  );
};

export default WelcomeScreen;
