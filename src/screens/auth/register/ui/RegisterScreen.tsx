import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { Link } from 'expo-router';
import { PrimaryTitle } from '@/shared/ui';
import { styled } from 'nativewind';
import { RegisterForm } from '@/widgets/auth';

const Wrapper = styled(View);

const RegisterScreen: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper className="px-4 pt-11 h-full bg-white flex justify-center items-center">
        <PrimaryTitle text="Реєстрація" classNames="mb-8"/>
        <RegisterForm />
        <Link href="/dashboard" style={{color: 'green' }}>
          Dashboard
        </Link>
        <Link href="/welcome" style={{color: 'red' }}>
          Welcome
        </Link>
        <Link href="/login" style={{color: 'green' }}>
          Login
        </Link>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
