import { View, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { useState } from 'react';
import { styled } from 'nativewind';
import { LabelInput, PrimaryButton, PrimaryInput } from '@/shared/ui';
import { router } from 'expo-router';

const WrapperInputs = styled(View);
const WrapperForm = styled(View);
const TextWrapper = styled(View);
const Title = styled(Text);

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');

  const onSubmitForm = () => {
    console.log('email =>', email);
    setEmail('');
    router.navigate('/dashboard');
  };

  return (
    <WrapperForm className="grow mb-9 w-full">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <TextWrapper>
          <Title className="font-medium text-xl text-black-primary mb-2">
            Забули пароль?
          </Title>

          <Title className=" text-black-primary mb-6">
            Введіть вашу електронну пошту
          </Title>
        </TextWrapper>
        <WrapperInputs className="flex justify-center mb-40">
          <View>
            <LabelInput>Електронна пошта</LabelInput>
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
