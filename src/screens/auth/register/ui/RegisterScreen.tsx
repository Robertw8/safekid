import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { Link } from 'expo-router';
import { HyperText, NormalText, PrimaryTitle } from '@/shared/ui';
import { styled } from 'nativewind';
import { RegisterForm } from '@/widgets/auth';

const Wrapper = styled(View);

const RegisterScreen: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper className="px-4 pt-11 pb-13 h-full bg-white flex items-center">
        <PrimaryTitle text="Реєстрація" classNames="mb-8" />
        <RegisterForm />
        <Link href="/login">
          <NormalText text='Вже є акаунт?'/> <HyperText text='Увійти'/>
        </Link>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
