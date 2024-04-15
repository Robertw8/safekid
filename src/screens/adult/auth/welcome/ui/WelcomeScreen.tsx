import { View } from 'react-native';
import { Link, router } from 'expo-router';
import { ClickableRoleCard } from '@/widgets/auth';
import {
  PrimaryContainer,
  SecondaryTitle,
  adultIcon,
  kidIcon,
} from '@/shared/ui';
import { styled } from 'nativewind';

const CardsWrapper = styled(View);

const WelcomeScreen: React.FC = () => {
  return (
    <PrimaryContainer>
      <SecondaryTitle>Виберіть свою роль</SecondaryTitle>
      <CardsWrapper className="mt-8">
        <ClickableRoleCard
          iconXml={adultIcon}
          title="Дорослий"
          description="Lorem ipsum dolor sit amet."
          onPress={() => router.replace('/adult/register')}
        />
        <ClickableRoleCard
          iconXml={kidIcon}
          title="Дитина"
          description="Lorem ipsum dolor sit amet."
          classNames="mt-4"
          onPress={() => router.replace('/kid/scan')}
        />
      </CardsWrapper>
      <Link href="/dashboard" style={{ marginTop: 20, color: 'green' }}>
        Dashboard
      </Link>
    </PrimaryContainer>
  );
};

export default WelcomeScreen;
