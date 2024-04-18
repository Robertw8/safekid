import { styled } from 'nativewind';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { Link } from 'expo-router';
import { BackButton, HyperText, NormalText, PrimaryTitle } from '@/shared/ui';
import { RegisterForm } from '@/widgets/auth';

const Wrapper = styled(View);

const RegisterScreen: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper className="px-4 pt-152px pb-13 h-full bg-white flex items-center">
        <BackButton />
        <PrimaryTitle classNames="mb-8">Реєстрація</PrimaryTitle>
        <RegisterForm />
        <Link href="/auth/adult/login">
          <NormalText>Вже є акаунт?</NormalText> <HyperText>Увійти</HyperText>
        </Link>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
