import {
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import { styled } from 'nativewind';
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

const WrapperInputs = styled(View);
const TouchableOpacityStyled = styled(TouchableOpacity);
const WrapperForm = styled(View);
const TextStyled = styled(Text);

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  // const [isFocus, setIsFocus] = useState({
  //   email: false,
  //   password: false,
  // });

  const onSubmitForm = () => {
    console.log('email =>', email);
    console.log('password =>', password);
    setEmail('');
    setPassword('');
    router.replace('/(tabs)/dashboard');
  };

  // const onFocusToggle = inputName => {
  //   setIsFocus({ [inputName]: true });
  // };
  // const onBlurToggle = inputName => {
  //   setIsFocus({ [inputName]: false });
  // };

  return (
    <WrapperForm className="grow mb-9 w-full">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <WrapperInputs className="flex justify-center gap-4 mb-6">
          <View>
            <LabelInput text="Електронна пошта" />
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
            <LabelInput text="Пароль" />
            <PrimaryInput
              // onFocus={() => onFocusToggle('password')}
              // onBlur={() => onBlurToggle('password')}
              onChangeText={setPassword}
              value={password}
              placeholder="password"
              secureTextEntry={showPassword}
            />
            <TouchableOpacityStyled
              className="absolute bottom-3.5 right-3.5"
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Icon xml={closedEyeIcon} />
              ) : (
                <Icon xml={openEyeIcon} />
              )}
            </TouchableOpacityStyled>
          </View>
        </WrapperInputs>
      </KeyboardAvoidingView>
      <Link
        href="/password-reset"
        className="self-center font-normal text-sm leading-normal underline text-black"
      >
        Забули пароль?
      </Link>
      <PrimaryButton
        text="Увійти"
        onPress={onSubmitForm}
        hint="Увійти в свій акаунт"
        label="Увійти"
        role="button"
        classNames="w-48 self-center mt-auto	"
      />
    </WrapperForm>
  );
};

export default LogInForm;
