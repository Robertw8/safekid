import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { BackButton, Icon, chatIcon, messageIcon } from '@/shared/ui';
import { useAppSelector } from '@/shared/lib';
import { selectIsLoading } from '@/processes/auth/model/selectors';
import { styled } from 'nativewind';
import { ResetPasswordForm } from '@/widgets/auth';

const Wrapper = styled(View);

const ResetPasswordScreen: React.FC = () => {
  const isLoading = useAppSelector(selectIsLoading);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {isLoading ? (
        <Wrapper className="h-full justify-center">
          <ActivityIndicator size={100} color="#3D33E2" />
        </Wrapper>
      ) : (
        <Wrapper className="px-4 pt-10 h-full bg-white flex">
          <BackButton />
          <Icon xml={chatIcon} classNames={`ml-[320px] mt-6`} />
          <Icon xml={messageIcon} classNames={`ml-14 mt-10`} />
          <ResetPasswordForm />
        </Wrapper>
      )}
    </TouchableWithoutFeedback>
  );
};

export default ResetPasswordScreen;
