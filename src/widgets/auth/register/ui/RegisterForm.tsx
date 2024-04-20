import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  CheckField,
  HyperText,
  Icon,
  LabelInput,
  NormalText,
  PrimaryButton,
  PrimaryInput,
  closedEyeIcon,
  openEyeIcon,
} from '@/shared/ui';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { validationRegisterSchema } from '@/entities/auth';

const WrapperInputs = styled(View);
const TouchableOpacityStyled = styled(TouchableOpacity);
const WrapperForm = styled(View);

const RegisterForm = () => {
  const [showPasswordFirst, setShowPasswordFirst] = useState(true);
  const [showPasswordSecond, setShowPasswordSecond] = useState(true);
  const [check, setCheck] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onPressSend = (formData) => {
    if (check) {
      console.log(formData);
    } else {
      alert('Підтвердіть згоду з умовами конфіденційності')
    }
  };

  return (
    <WrapperForm className="grow mb-9 w-full">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <WrapperInputs className="flex justify-center gap-4 mb-6">
          <View>
            <LabelInput classNames='mb-2'>Електронна пошта</LabelInput>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <PrimaryInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Email"
                  classNames={`${errors.email && 'border border-rose-600 text-red'}`}
                />
              )}
              name="email"
            />
            {errors.email && <LabelInput classNames='text-red'>{errors.email.message}</LabelInput>}
          </View>
          <View >
            <LabelInput classNames='mb-2'>Пароль</LabelInput>
            <View style={{ position: 'relative' }}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <PrimaryInput
                    value={value}
                    onChangeText={onChange}
                    placeholder="Password"
                    secureTextEntry={showPasswordFirst}
                    classNames={`${errors.password && 'border border-rose-600 text-red'}`}
                  />
                )}
                name="password"
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
            {errors.password && <LabelInput classNames='text-red'>{errors.password.message}</LabelInput>}

          </View>
          <View>
            <LabelInput classNames='mb-2'>Повторіть пароль</LabelInput>
            <View style={{ position: 'relative' }}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <PrimaryInput
                    value={value || ''}
                    onChangeText={onChange}
                    placeholder="Confirm password"
                    secureTextEntry={showPasswordSecond}
                    classNames={`${errors.confirmPassword && 'border border-rose-600 text-red'}`}
                  />
                )}
                name="confirmPassword"
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
            {errors.confirmPassword && <LabelInput classNames='text-red'>{errors.confirmPassword.message}</LabelInput>}
          </View>
        </WrapperInputs>
      </KeyboardAvoidingView>
      <CheckField checked={check} onPress={() => setCheck(!check)}>
        <Link href="/auth/adult/privacy-police">
          <NormalText classNames={`font-normal text-xs leading-normal ${check ? 'text-black-100' : 'text-red'}`}>
            Згоден з
          </NormalText>{' '}
          <HyperText classNames="font-normal text-xs  leading-normal">
            умовами та політикою конфіденційності
          </HyperText>
        </Link>
      </CheckField>
      <PrimaryButton
        text="Зареєструватися"
        // onPress={onSubmitForm}
        onPress={handleSubmit(onPressSend)}
        hint="Зареєструвати ваш акаунт"
        label="Зареєструватися"
        role="button"
        classNames="w-48 self-center mt-auto"
      />
    </WrapperForm>
  );
};

export default RegisterForm;