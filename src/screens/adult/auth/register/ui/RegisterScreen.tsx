import { styled } from 'nativewind';
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  ActivityIndicator,
} from 'react-native';
import { Link } from 'expo-router';
import { BackButton, HyperText, NormalText, PrimaryTitle } from '@/shared/ui';
import { RegisterForm } from '@/widgets/auth';
import { useAppSelector } from '@/shared/lib';
import { selectIsLoading } from '@/processes/auth/model/selectors';

const Wrapper = styled(View);

const RegisterScreen: React.FC = () => {
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {isLoading ? (
        <Wrapper className="h-full justify-center">
          <ActivityIndicator size={100} color="#3D33E2" />
        </Wrapper>
      ) : (
        <Wrapper className="px-4 pt-40 pb-12 h-full bg-white flex items-center">
          <BackButton />
          <PrimaryTitle classNames="mb-8">Реєстрація</PrimaryTitle>
          <RegisterForm />
          <Link href="/auth/adult/login">
            <NormalText>Вже є акаунт?</NormalText> <HyperText>Увійти</HyperText>
          </Link>
        </Wrapper>
      )}
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
