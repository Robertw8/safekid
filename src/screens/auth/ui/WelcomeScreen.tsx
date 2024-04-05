import { ClickableRoleCard } from '@/widgets/auth';
import { SecondaryTitle, adultIcon, kidIcon } from '@/shared/ui';
import { View } from 'react-native';
import { styled } from 'nativewind';
import { router } from 'expo-router';

const CardsWrapper = styled(View);

const WelcomeScreen: React.FC = () => {
  return (
    <View>
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
    </View>
  );
};

export default WelcomeScreen;
