import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { Link } from 'expo-router';
import { PrimaryTitle } from '@/shared/ui';
import { styled } from 'nativewind';
import { RegisterForm } from '@/widgets/auth';

const Wrapper = styled(View);

const RegisterScreen: React.FC = () => {
  return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Wrapper className="px-4 h-full flex justify-center items-center">
      <PrimaryTitle text="Реєстрація" />
      <RegisterForm/>
      <Link href="/dashboard" style={{ marginTop: 20, color: 'green' }}>
        Dashboard
          </Link>
          <Link href="/login" style={{ marginTop: 20, color: 'green' }}>
        Login
      </Link>
      </Wrapper>
      </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
