import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { LogInForm } from '@/widgets/auth';
import { styled } from 'nativewind';
import { Link } from 'expo-router';
import { HyperText, NormalText, PrimaryTitle } from '@/shared/ui';

const Wrapper = styled(View);

const LoginScreen: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper className="px-4 pt-11 pb-13 h-full bg-white flex items-center">
        <PrimaryTitle text="Вхід" classNames="mb-8" />
        <LogInForm />
        <Link href="/register">
          <NormalText text='Не маєте акаунту?'/> <HyperText text='Створити'/>
        </Link>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
