import { styled } from 'nativewind';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { LogInForm } from '@/widgets/auth';
import { Link } from 'expo-router';
import { BackButton, HyperText, NormalText, PrimaryTitle } from '@/shared/ui';

const Wrapper = styled(View);

const LoginScreen: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper className="px-4 pt-40 pb-12 h-full bg-white flex items-center">
        <BackButton />
        <PrimaryTitle classNames="mb-8">Вхід</PrimaryTitle>
        <LogInForm />
        <Link href="/auth/adult/register">
          <NormalText>Не маєте акаунту?</NormalText>{' '}
          <HyperText>Створити</HyperText>
        </Link>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
