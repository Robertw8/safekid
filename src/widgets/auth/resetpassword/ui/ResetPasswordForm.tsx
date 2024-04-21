import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import { styled } from 'nativewind';
import {
  LabelInput,
  NormalText,
  PrimaryButton,
  PrimaryInput,
  SecondaryTitle,
} from '@/shared/ui';
import { router } from 'expo-router';

const WrapperInputs = styled(View);
const WrapperForm = styled(View);
const TextWrapper = styled(View);

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');

  const onSubmitForm = () => {
    console.log('email =>', email);
    setEmail('');
    router.navigate('/auth/adult/confirm-register');
  };

  return (
    <WrapperForm className="grow mb-9 w-full">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <TextWrapper>
          <SecondaryTitle> Забули пароль?</SecondaryTitle>
          <NormalText classNames="mt-2 mb-6 ml-2">
            Введіть вашу електронну пошту
          </NormalText>
        </TextWrapper>
        <WrapperInputs className="flex justify-center mb-40 ml-2">
          <View>
            <LabelInput classNames="mb-3">Електронна пошта</LabelInput>
            <PrimaryInput
              onChangeText={setEmail}
              value={email}
              placeholder="example@email.com"
              autoFocus
              keyboardType="email-address"
            />
          </View>
        </WrapperInputs>
      </KeyboardAvoidingView>

      <PrimaryButton
        text="Відновити пароль"
        onPress={onSubmitForm}
        hint="Відновити пароль"
        label="Відновити пароль"
        role="button"
        classNames="w-48 self-center"
      />
    </WrapperForm>
  );
};

export default ResetPasswordForm;
