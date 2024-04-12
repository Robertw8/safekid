import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Pressable,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TextInput
} from 'react-native';
import { useState } from 'react';
import { Link, router } from 'expo-router';


const RegisterForm: React.FC = () => {
        const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [isFocus, setIsFocus] = useState({
        login: false,
        email: false,
        password: false
    });


    const onSubmitForm = () => {
        console.log('login =>', login);
        console.log('email =>', email);
        console.log('password =>', password);
        setLogin('');
        setEmail('');
        setPassword('');
        router.replace('/(tabs)/dashboard');
    };

    const onFocusToggle = (inputName) => { setIsFocus({ [inputName]: true }) };
    const onBlurToggle = (inputName) => { setIsFocus({ [inputName]: false }) };

    return (
            <View >
                
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <View style={stylesRegister.formWrap}>
                        <TextInput
                            style={[stylesRegister.input, (isFocus.login ? stylesRegister.inputFocus : stylesRegister.inputBlur)]}
                            autoFocus
                            onFocus={() => onFocusToggle('login')}
                            onBlur={() => onBlurToggle('login')}
                            onChangeText={setLogin}
                            value={login}
                            placeholder="Логін"
                            keyboardType="default"
                        />
                        <TextInput
                            style={[stylesRegister.input, (isFocus.email ? stylesRegister.inputFocus : stylesRegister.inputBlur)]}
                            onFocus={() => onFocusToggle('email')}
                            onBlur={() => onBlurToggle('email')}
                            
                            onChangeText={setEmail}
                            value={email}
                            placeholder="Адреса електронної пошти"
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={[stylesRegister.input, (isFocus.password ? stylesRegister.inputFocus : stylesRegister.inputBlur)]}
                            onFocus={() => onFocusToggle('password')}
                            onBlur={() => onBlurToggle('password')}
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Пароль"
                            secureTextEntry={showPassword}
                        />
                        <TouchableOpacity
                            style={stylesRegister.touchWrapForm}
                            onPress={() => setShowPassword(!showPassword)}>
                            <Text style={stylesRegister.visiblePassword}>
                                {showPassword ? 'Показати' : 'Приховати'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                <Pressable style={stylesRegister.button}
                    onPress={onSubmitForm}
                >
                    <Text style={stylesRegister.textButton}>Зареєструватися</Text>
                </Pressable>

                <Link href="/login" style={stylesRegister.visiblePassword}>
          Вже є акаунт? Увійти
        </Link>
            </View>
    )
};

export default RegisterForm;


export const stylesRegister = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: "flex-end",
        paddingHorizontal: 16,
        paddingTop: 92,
        paddingBottom: 78,
        width: '100%',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
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