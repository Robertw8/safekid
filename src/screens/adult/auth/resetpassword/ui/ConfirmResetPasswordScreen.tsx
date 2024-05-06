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

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const inputRefsArr = [input1Ref, input2Ref, input3Ref, input4Ref];

  const handleChange = (index, value, nextInputRef, prevInputRef) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value.length === 0 && prevInputRef && prevInputRef?.current) {
      prevInputRef.current.focus();
    } else if (value.length === 1 && nextInputRef && nextInputRef?.current) {
      nextInputRef.current.focus();
    }
  };

  const onSubmitForm = () => {
    const enteredCode = code.join('');
    const verifyData = {
      email: regUserData?.dto.email,
      code: enteredCode,
    };
    dispatch(postVerifyEmailThunk(verifyData));
    setCode(['', '', '', '']);
  };

  const resendCode = () => {
    console.log(`Resending code to the ${regUserData?.dto.email}`);
    dispatch(postResendVerifyCodeThunk(regUserData?.dto.email));
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
                onChangeText={value =>
                  handleChange(
                    index,
                    value,
                    inputRefsArr[index + 1],
                    inputRefsArr[index - 1]
                  )
                }
                value={code[index]}
                keyboardType="numeric"
                inputRef={inputRefsArr[index]}
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
