import { View } from 'react-native';
import { Link, router } from 'expo-router';
import { ClickableRoleCard } from '@/widgets/auth';
import { SecondaryTitle, adultIcon, kidIcon } from '@/shared/ui';
import { styled } from 'nativewind';

const Wrapper = styled(View);
const CardsWrapper = styled(View);

const WelcomeScreen: React.FC = () => {
  return (
    <Wrapper className="px-4 h-full flex justify-center items-center">
      <SecondaryTitle text="Виберіть свою роль" />
      <CardsWrapper className="mt-8">
        <ClickableRoleCard
          iconXml={adultIcon}
          title="Дорослий"
          description="Lorem ipsum dolor sit amet."
          onPress={() => router.replace('/register')}
        />
        <ClickableRoleCard
          iconXml={kidIcon}
          title="Дитина"
          description="Lorem ipsum dolor sit amet."
          classNames="mt-4"
          onPress={() => router.replace('/login')}
        />
      </CardsWrapper>
      <Link href="/dashboard" style={{ marginTop: 20, color: 'green' }}>
        Dashboard
      </Link>
    </Wrapper>
  );
};

export default WelcomeScreen;
