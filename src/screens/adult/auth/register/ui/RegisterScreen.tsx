import { styled } from 'nativewind';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { Link, router } from 'expo-router';
import { BackButton, HyperText, NormalText, PrimaryTitle } from '@/shared/ui';
import { RegisterForm } from '@/widgets/auth';

const Wrapper = styled(View);

const RegisterScreen: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper className="px-4 pt-11 pb-13 h-full bg-white flex items-center">
        <BackButton onPress={() => router.replace('/welcome')} />
        <PrimaryTitle classNames="mb-8">Реєстрація</PrimaryTitle>
        <RegisterForm />
        <Link href="/adult/login">
          <NormalText text="Вже є акаунт?" /> <HyperText text="Увійти" />
        </Link>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
