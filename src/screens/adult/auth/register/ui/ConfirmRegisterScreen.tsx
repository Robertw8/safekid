import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, ActivityIndicator } from 'react-native';
import {
  BackButton,
  Icon,
  NormalText,
  PrimaryButton,
  chatIcon,
} from '@/shared/ui';
import { styled } from 'nativewind';
import { router } from 'expo-router';
import { TouchableOpacity, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { selectIsLoading, selectUserData, selectVerifyEmail } from '@/processes/auth/model/selectors';
import { postVerifyEmailThunk } from '@/processes/auth/model/operations';

const Wrapper = styled(View);

const DigitInput = ({ digit, onChange, inputRef }) => {
  return (
    <TextInput
      style={{
        borderWidth: 0,
        backgroundColor: '#E8E8E8',
        borderRadius: 10,
        width: 36,
        height: 36,
        textAlign: 'center',
        margin: 5,
      }}
      onChangeText={onChange}
      maxLength={1}
      keyboardType="numeric"
      value={digit}
      ref={inputRef}
    />
  );
};

const ConfirmRegisterScreen = () => {
  const dispatch = useAppDispatch();

  const [code, setCode] = useState(['', '', '', '']);
  const regUserData = useAppSelector(selectUserData);
  const isEmailVerify = useAppSelector(selectVerifyEmail);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (!isEmailVerify) {
      return;
    }
    router.navigate('/auth/adult/login' as `${string}:${string}`);
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
      code: enteredCode
    };
    dispatch(postVerifyEmailThunk(verifyData))
    setCode(['', '', '', '']);
  };

  const resendCode = () => {
    console.log('Resending code...');
  };

  return (
    <>
      {isLoading ?
        (<Wrapper className="h-full justify-center">
          <ActivityIndicator size={100} color="#3D33E2" />
        </Wrapper>) :
        (<Wrapper className="px-4 pt-10 h-full bg-white flex">
          <BackButton />
          <Icon xml={chatIcon} classNames={`ml-[320px] mt-6`} />
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
              <DigitInput
                inputRef={inputRefsArr[index]}
                key={index}
                digit={code[index]}
                onChange={value => handleChange(index, value, inputRefsArr[index+1], inputRefsArr[index-1])}
              />)
            )}
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
            text="Підтвердити реєстрацію"
            onPress={onSubmitForm}
            hint="Підтвердити реєстрацію"
            label="Підтвердити реєстрацію"
            role="button"
            classNames="w-full self-center mt-40"
          />
        </Wrapper>)}
      
    </>
  );
};

export default ConfirmRegisterScreen;
