import { styled } from 'nativewind';
import { router } from 'expo-router';
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
  const handleAdultSelect = () => {
    router.navigate('/auth/adult/login');
  };

  const handleKidSelect = () => {
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