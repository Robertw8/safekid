import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Pressable,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import { LabelInput, PrimaryInput } from '@/shared/ui';


const RegisterForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    // const [isFocus, setIsFocus] = useState({
    //     email: false,
    //     password: false
    // });

    const onSubmitForm = () => {
        console.log('email =>', email);
        console.log('password =>', password);
        setEmail('');
        setPassword('');
        router.replace('/(tabs)/dashboard' as `${string}:${string}`);
    };

    // const onFocusToggle = (inputName) => { setIsFocus({ [inputName]: true }) };
    // const onBlurToggle = (inputName) => { setIsFocus({ [inputName]: false }) };

    return (
        <View >
                
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <View style={stylesRegister.formWrap}>
                    <LabelInput text='Електронна пошта'/>
                    <PrimaryInput
                        // onFocus={() => onFocusToggle('login')}
                        // onBlur={() => onBlurToggle('login')}
                        onChangeText={setEmail}
                        value={email}
                        placeholder='example@email.com'
                        autoFocus
                        keyboardType="email-address"
                    />
                                        <LabelInput text='Пароль'/>
                    <PrimaryInput
                        // onFocus={() => onFocusToggle('password')}
                        // onBlur={() => onBlurToggle('password')}
                        onChangeText={setPassword}
                        value={password}
                        placeholder='password'
                        secureTextEntry={showPassword}
                    />
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}>
                        <Text style={stylesRegister.visiblePassword}>
                            {showPassword ? 'Показати' : 'Приховати'}
                        </Text>
                    </TouchableOpacity>
                                                            <LabelInput text='Повторіть пароль'/>
                    <PrimaryInput
                        // onFocus={() => onFocusToggle('password')}
                        // onBlur={() => onBlurToggle('password')}
                        onChangeText={setPassword}
                        value={password}
                        placeholder='password'
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
            <Text>Згоден з умовами та політикою конфіденційності</Text>
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