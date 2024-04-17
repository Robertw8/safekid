import { styled } from 'nativewind';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { LogInForm } from '@/widgets/auth';
import { Link, router } from 'expo-router';
import { BackButton, HyperText, NormalText, PrimaryTitle } from '@/shared/ui';

const Wrapper = styled(View);

const LoginScreen: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper className="px-4 pt-152px pb-13 h-full bg-white flex items-center">
        <BackButton onPress={() => router.replace('/welcome')} />
        <PrimaryTitle classNames="mb-8">Вхід</PrimaryTitle>
        <LogInForm />
        <Link href="/adult/register">
          <NormalText>Не маєте акаунту?</NormalText>
          {' '}
          <HyperText>Створити</HyperText>
        </Link>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
