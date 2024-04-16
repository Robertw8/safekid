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

const CardsWrapper = styled(View);

const WelcomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { role } = useAuth();

  const handleAdultSelect = () => {
    dispatch(setUserRole('adult'));
    console.log('USER ROLE:', role);
    router.replace('/adult/login');
  };

  const handleKidSelect = () => {
    dispatch(setUserRole('kid'));
    console.log('USER ROLE:', role);
    router.replace('/kid/scan');
  };

  return (
    <PrimaryContainer>
      <SecondaryTitle>Виберіть свою роль</SecondaryTitle>
      <CardsWrapper className="mt-8">
        <ClickableRoleCard
          iconXml={adultIcon}
          title="Дорослий"
          description="Lorem ipsum dolor sit amet."
          onPress={handleAdultSelect}
        />
        <ClickableRoleCard
          iconXml={kidIcon}
          title="Дитина"
          description="Lorem ipsum dolor sit amet."
          classNames="mt-4"
          // onPress={() => router.replace('/kid/scan')}
          onPress={handleKidSelect}
        />
      </CardsWrapper>
      <Link href="/dashboard" style={{ marginTop: 20, color: 'green' }}>
        Dashboard
      </Link>
    </PrimaryContainer>
  );
};

export default WelcomeScreen;
