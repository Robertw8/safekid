import { styled } from 'nativewind';
import { ActivityIndicator, Keyboard, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { LogInForm } from '@/widgets/auth';
import { Link } from 'expo-router';
import { BackButton, HyperText, NormalText, PrimaryTitle } from '@/shared/ui';
import { useAppSelector } from '@/shared/lib';
import { selectIsLoading } from '@/processes/auth/model/selectors';

const Wrapper = styled(View);
const ScrollWrapper = styled(ScrollView);

const LoginScreen: React.FC = () => {
    const isLoading = useAppSelector(selectIsLoading);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollWrapper className='bg-white'>
        {isLoading ?
          (<Wrapper className="h-screen justify-center">
            <ActivityIndicator size={100} color="#3D33E2" />
          </Wrapper>) :
          <Wrapper className="px-4 pt-40 pb-12 h-screen bg-white flex items-center">
          <BackButton />
          <PrimaryTitle classNames="mb-8">Вхід</PrimaryTitle>
          <LogInForm />
          <Link href="/auth/adult/register">
            <NormalText>Не маєте акаунту?</NormalText>{' '}
            <HyperText>Створити</HyperText>
          </Link>
        </Wrapper>}
      </ScrollWrapper>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
