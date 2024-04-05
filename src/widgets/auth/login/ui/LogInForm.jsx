import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useState } from 'react';
import { Link, router } from 'expo-router';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [isFocus, setIsFocus] = useState({
    email: false,
    password: false,
  });

  const onSubmitForm = () => {
    console.log('email =>', email);
    console.log('password =>', password);
    setEmail('');
    setPassword('');
    router.replace('/(tabs)/dashboard');
  };

  const onFocusToggle = inputName => {
    setIsFocus({ [inputName]: true });
  };
  const onBlurToggle = inputName => {
    setIsFocus({ [inputName]: false });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={stylesLogin.container}>
        <Text style={stylesLogin.title}>Увійти</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          <View style={stylesLogin.formWrap}>
            <TextInput
              style={[
                stylesLogin.input,
                isFocus.email ? stylesLogin.inputFocus : stylesLogin.inputBlur,
              ]}
              autoFocus
              onFocus={() => onFocusToggle('email')}
              onBlur={() => onBlurToggle('email')}
              onChangeText={setEmail}
              value={email}
              placeholder="Адреса електронної пошти"
              keyboardType="email-address"
            />
            <TextInput
              style={[
                stylesLogin.input,
                isFocus.password
                  ? stylesLogin.inputFocus
                  : stylesLogin.inputBlur,
              ]}
              onFocus={() => onFocusToggle('password')}
              onBlur={() => onBlurToggle('password')}
              onChangeText={setPassword}
              value={password}
              placeholder="Пароль"
              secureTextEntry={showPassword}
            />
            <TouchableOpacity
              style={stylesLogin.touchWrapForm}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={stylesLogin.visiblePassword}>
                {showPassword ? 'Показати' : 'Приховати'}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <Link
          href="/password-reset"
          style={[stylesLogin.visiblePassword, { marginBottom: 20 }]}
        >
          Забули пароль?
        </Link>
        <Pressable style={stylesLogin.button} onPress={onSubmitForm}>
          <Text style={stylesLogin.textButton}>Увійти</Text>
        </Pressable>

        <Link href="/register" style={stylesLogin.visiblePassword}>
          Немає акаунту? Зареєструватися
        </Link>
      </View>
    </TouchableWithoutFeedback>
  );
};

const stylesLogin = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 144,
    width: '100%',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  title: {
    fontSize: 30,
    // fontFamily: 'RobotoMedium',
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  formWrap: {
    width: 343,
    gap: 16,
    marginBottom: 43,
    position: 'relative',
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    paddingBottom: 15,
    borderWidth: 1,
    color: '#212121',
  },
  inputFocus: {
    borderColor: '#FF6C00',
    backgroundColor: '#FFFFFF',
  },
  inputBlur: {
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
  },
  touchWrapForm: {
    position: 'absolute',
    bottom: 31,
    right: 16,
  },
  button: {
    width: 343,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    marginBottom: 16,
  },
  textButton: {
    color: '#FFF',
    textAlign: 'center',
  },
  visiblePassword: {
    color: '#1B4371',
  },
  textUnderButton: {
    color: '#1B4371',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});

export default LogInForm;
