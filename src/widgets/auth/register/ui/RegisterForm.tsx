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
import { HyperText, Icon, LabelInput, NormalText, PrimaryButton, PrimaryInput, closedEyeIcon, openEyeIcon } from '@/shared/ui';
import { styled } from 'nativewind';

const WrapperInputs = styled(View);
const TouchableOpacityStyled = styled(TouchableOpacity);
const WrapperForm = styled(View);

const RegisterForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [passwordFirst, setPasswordFirst] = useState('');
    const [passwordSecond, setPasswordSecond] = useState('');
    const [showPasswordFirst, setShowPasswordFirst] = useState(true);
    const [showPasswordSecond, setShowPasswordSecond] = useState(true);

    // const [isFocus, setIsFocus] = useState({
    //     email: false,
    //     password: false
    // });

    const onSubmitForm = () => {
        console.log('email =>', email);
        console.log('passwordFirst =>', passwordFirst);
        console.log('passwordSecond =>', passwordSecond);
        setEmail('');
        setPasswordFirst('');
        setPasswordSecond('');
        router.replace('/(tabs)/dashboard' as `${string}:${string}`);
    };

    // const onFocusToggle = (inputName) => { setIsFocus({ [inputName]: true }) };
    // const onBlurToggle = (inputName) => { setIsFocus({ [inputName]: false }) };

    return (
        <WrapperForm className='grow mb-9 w-full' >
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <WrapperInputs className="flex justify-center gap-4 mb-6">
                    <View>
                        <LabelInput text='Електронна пошта' />
                        <PrimaryInput
                            // onFocus={() => onFocusToggle('login')}
                            // onBlur={() => onBlurToggle('login')}
                            onChangeText={setEmail}
                            value={email}
                            placeholder='example@email.com'
                            autoFocus
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={{ position: 'relative' }}>
                        <LabelInput text='Пароль' />
                        <PrimaryInput
                            // onFocus={() => onFocusToggle('password')}
                            // onBlur={() => onBlurToggle('password')}
                            onChangeText={setPasswordFirst}
                            value={passwordFirst}
                            placeholder='password'
                            secureTextEntry={showPasswordFirst}
                        />
                        <TouchableOpacityStyled
                            className='absolute bottom-3.5 right-3.5'
                            onPress={() => setShowPasswordFirst(!showPasswordFirst)}>
                            {showPasswordFirst ? <Icon xml={closedEyeIcon} /> : <Icon xml={openEyeIcon} />}
                        </TouchableOpacityStyled>
                    </View>
                    <View style={{ position: 'relative' }}>
                        <LabelInput text='Повторіть пароль' />
                        <PrimaryInput
                            // onFocus={() => onFocusToggle('password')}
                            // onBlur={() => onBlurToggle('password')}
                            onChangeText={setPasswordSecond}
                            value={passwordSecond}
                            placeholder='password'
                            secureTextEntry={showPasswordSecond}
                        />
                        <TouchableOpacityStyled
                            className='absolute bottom-3.5 right-3.5'
                            onPress={() => setShowPasswordSecond(!showPasswordSecond)}>
                            {showPasswordSecond ? <Icon xml={closedEyeIcon} /> : <Icon xml={openEyeIcon} />}
                        </TouchableOpacityStyled>
                    </View>
                </WrapperInputs>
            </KeyboardAvoidingView>
            <Link href="/login">
                <NormalText text='Згоден з' classNames='font-normal text-xs leading-normal' /> <HyperText text='умовами та політикою конфіденційності' classNames='font-normal	text-xs	leading-normal' />
            </Link>
            <PrimaryButton
                text='Зареєструватися'
                onPress={onSubmitForm}
                hint="Зареєструвати ваш акаунт"
                label="Зареєструватися"
                role='button'
                classNames='w-48 self-center mt-auto	'
            />
        </WrapperForm>
    )
};

export default RegisterForm;


export const stylesRegister = StyleSheet.create({



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

  visiblePassword: {
    color: '#1B4371',
  },
});