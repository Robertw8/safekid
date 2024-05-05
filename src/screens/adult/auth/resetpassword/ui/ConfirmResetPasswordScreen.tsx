import React, { useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import {
  BackButton,
  ConfirmRegisterInput,
  Icon,
  NormalText,
  PrimaryButton,
  chatIcon,
} from '@/shared/ui';
import { styled } from 'nativewind';
import { router } from 'expo-router';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import {
  selectIsLoading,
  selectUserData,
  selectVerifyEmail,
} from '@/processes/auth/model/selectors';
import {
  postResendVerifyCodeThunk,
  postVerifyEmailThunk,
} from '@/processes/auth/model/operations';

const Wrapper = styled(View);

const ConfirmResetPasswordScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const regUserData = useAppSelector(selectUserData);
  const isEmailVerify = useAppSelector(selectVerifyEmail);
  const isLoading = useAppSelector(selectIsLoading);

  const [code, setCode] = useState(['', '', '', '']);

  useEffect(() => {
    if (isEmailVerify) {
      router.navigate('/auth/adult/new-password' as `${string}:${string}`);
    }
  }, [isEmailVerify]);

  const inputRefsArr = useRef<Array<React.RefObject<any>>>(
    Array(4)
      .fill(null)
      .map(() => useRef(null))
  );

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    const nextIndex = index + 1;
    const prevIndex = index - 1;
    if (value.length === 0 && prevIndex >= 0) {
      inputRefsArr.current[prevIndex].current.focus();
    } else if (value.length === 1 && nextIndex < 4) {
      inputRefsArr.current[nextIndex].current.focus();
    }
  };

  const onSubmitForm = () => {
    const enteredCode = code.join('');
    const userEmail = regUserData?.dto.email;
    if (userEmail) {
      const verifyData = {
        email: userEmail,
        code: enteredCode,
      };
      dispatch(postVerifyEmailThunk(verifyData));
      setCode(['', '', '', '']);
    } else {
      console.error('User email is undefined or null');
    }
  };

  const resendCode = () => {
    if (regUserData && regUserData.dto && regUserData.dto.email) {
      const userEmail = regUserData.dto.email;
      dispatch(postResendVerifyCodeThunk(userEmail));
      console.log(`Resending code to ${userEmail}`);
    } else {
      console.error('User email is undefined or null');
    }
  };

  return (
    <>
      {isLoading ? (
        <Wrapper className="h-full justify-center">
          <ActivityIndicator size={100} color="#3D33E2" />
        </Wrapper>
      ) : (
        <Wrapper className="px-4 pt-10 h-full bg-white flex">
          <BackButton />
          <Icon xml={chatIcon} classNames="ml-[320px] mt-6" />
          <NormalText classNames="mt-14 mb-5">
            Введіть цифровий код з повідомлення:
          </NormalText>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            {[0, 1, 2, 3].map(index => (
              <ConfirmRegisterInput
                onChangeText={value => handleChange(index, value)}
                value={code[index]}
                keyboardType="numeric"
                inputRef={inputRefsArr.current[index]}
                maxLength={1}
                key={index}
              />
            ))}
          </View>
          <NormalText classNames="mt-5">Не прийшов код? </NormalText>

          <TouchableOpacity onPress={resendCode}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 18,
                color: '#374785',
                textDecorationLine: 'underline',
              }}
            >
              Натисніть, щоб відправити знову
            </Text>
          </TouchableOpacity>
          <PrimaryButton
            text="Встановити новий пароль"
            onPress={onSubmitForm}
            hint="Встановити новий пароль"
            label="Встановити новий пароль"
            role="button"
            classNames="w-full self-center mt-40"
          />
        </Wrapper>
      )}
    </>
  );
};

export default ConfirmResetPasswordScreen;
