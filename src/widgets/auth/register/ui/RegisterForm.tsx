import {
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import {
  HyperText,
  Icon,
  LabelInput,
  NormalText,
  PrimaryButton,
  PrimaryInput,
  closedEyeIcon,
  openEyeIcon,
} from '@/shared/ui';
import { styled } from 'nativewind';
import { CheckField } from '@/features/ui';

const WrapperInputs = styled(View);
const TouchableOpacityStyled = styled(TouchableOpacity);
const WrapperForm = styled(View);

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [passwordFirst, setPasswordFirst] = useState('');
  const [passwordSecond, setPasswordSecond] = useState('');
  const [showPasswordFirst, setShowPasswordFirst] = useState(true);
  const [showPasswordSecond, setShowPasswordSecond] = useState(true);
  const [privacy, setPrivacy] = useState(false);

  // const [isFocus, setIsFocus] = useState({
  //     email: false,
  //     password: false
  // });

  const onSubmitForm = () => {
    console.log('email =>', email);
    console.log('passwordFirst =>', passwordFirst);
    console.log('passwordSecond =>', passwordSecond);
    console.log('privacy-police =>', privacy);
    setEmail('');
    setPasswordFirst('');
    setPasswordSecond('');
    setPrivacy(false);
    router.navigate('/adult/instruction' as `${string}:${string}`);
  };

  // const onFocusToggle = (inputName) => { setIsFocus({ [inputName]: true }) };
  // const onBlurToggle = (inputName) => { setIsFocus({ [inputName]: false }) };

  return (
    <WrapperForm className="grow mb-9 w-full">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <WrapperInputs className="flex justify-center gap-4 mb-6">
          <View>
            <LabelInput>Електронна пошта</LabelInput>
            <PrimaryInput
              // onFocus={() => onFocusToggle('login')}
              // onBlur={() => onBlurToggle('login')}
              onChangeText={setEmail}
              value={email}
              placeholder="example@email.com"
              autoFocus
              keyboardType="email-address"
            />
          </View>
          <View style={{ position: 'relative' }}>
            <LabelInput>Пароль</LabelInput>
            <PrimaryInput
              // onFocus={() => onFocusToggle('password')}
              // onBlur={() => onBlurToggle('password')}
              onChangeText={setPasswordFirst}
              value={passwordFirst}
              placeholder="password"
              secureTextEntry={showPasswordFirst}
            />
            <TouchableOpacityStyled
              className="absolute bottom-3.5 right-3.5"
              onPress={() => setShowPasswordFirst(!showPasswordFirst)}
            >
              {showPasswordFirst ? (
                <Icon xml={closedEyeIcon} />
              ) : (
                <Icon xml={openEyeIcon} />
              )}
            </TouchableOpacityStyled>
          </View>
          <View style={{ position: 'relative' }}>
            <LabelInput>Повторіть пароль</LabelInput>
            <PrimaryInput
              // onFocus={() => onFocusToggle('password')}
              // onBlur={() => onBlurToggle('password')}
              onChangeText={setPasswordSecond}
              value={passwordSecond}
              placeholder="password"
              secureTextEntry={showPasswordSecond}
            />
            <TouchableOpacityStyled
              className="absolute bottom-3.5 right-3.5"
              onPress={() => setShowPasswordSecond(!showPasswordSecond)}
            >
              {showPasswordSecond ? (
                <Icon xml={closedEyeIcon} />
              ) : (
                <Icon xml={openEyeIcon} />
              )}
            </TouchableOpacityStyled>
          </View>
        </WrapperInputs>
      </KeyboardAvoidingView>
      <CheckField checked={privacy} onPress={() => setPrivacy(!privacy)}>
        <Link href="/auth/adult/privacy-police">
          <NormalText classNames="font-normal text-xs leading-normal">
            Згоден з
          </NormalText>{' '}
          <HyperText classNames="font-normal text-xs	leading-normal">
            умовами та політикою конфіденційності
          </HyperText>
        </Link>
      </CheckField>
      <PrimaryButton
        text="Зареєструватися"
        onPress={onSubmitForm}
        hint="Зареєструвати ваш акаунт"
        label="Зареєструватися"
        role="button"
        classNames="w-48 self-center mt-auto"
      />
    </WrapperForm>
  );
};

export default RegisterForm;
