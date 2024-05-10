import { styled } from 'nativewind';
import { Keyboard, TouchableWithoutFeedback, View, ActivityIndicator, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { BackButton, HyperText, NormalText, PrimaryTitle } from '@/shared/ui';
import { RegisterForm } from '@/widgets/auth';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { selectIsLoading } from '@/processes/auth/model/selectors';
import { useEffect } from 'react';
import { getTokenThunk } from '@/processes/auth/model/operations';

const Wrapper = styled(View);
const ScrollWrapper = styled(ScrollView);

const RegisterScreen: React.FC = () => {
    const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getTokenThunk());
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollWrapper className='bg-white'>
        {isLoading ?
          (<Wrapper className="h-screen justify-center">
            <ActivityIndicator size={100} color="#3D33E2" />
          </Wrapper>) :
          (<Wrapper className="px-4 pt-40 pb-12 h-screen bg-white flex items-center">
            <BackButton />
            <PrimaryTitle classNames="mb-8">Реєстрація</PrimaryTitle>
            <RegisterForm />
            <Link href="/auth/adult/login">
              <NormalText>Вже є акаунт?</NormalText> <HyperText>Увійти</HyperText>
            </Link>
          </Wrapper>)}
      </ScrollWrapper>
    </TouchableWithoutFeedback >
  );
};

export default RegisterScreen;
