import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { PrimaryButton } from '@/shared/ui';
import { router } from 'expo-router';
import { validationRegisterSchema } from '@/entities/auth';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { selectToken, selectUserId } from '@/processes/auth/model/selectors';
import { postRegisterUserThunk } from '@/processes/auth/model/operations';
import PrivacyPolicyCheck from '@/features/privacy-police/ui/PrivacyPolicyCheck';
import { InputField } from '@/shared/ui/input/InputField';

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const [check, setCheck] = useState(false);

  const token = useAppSelector(selectToken);
  const userId = useAppSelector(selectUserId);

  console.log('Token in RegisterScreen: ', token);
  console.log('userId in RegisterScreen: ', userId);

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

  useEffect(() => {
    if (!userId) {
      return;
    }
    router.navigate('/auth/adult/confirm-register' as `${string}:${string}`);
  }, [userId]);

  const onPressSend = ({ email, password }) => {
    if (check) {
      const userData = {
        email,
        password,
        deviceToken: token,
        privacyPolicyAgreement: check,
      };
      dispatch(postRegisterUserThunk(userData));
    } else {
      alert('Підтвердіть згоду з умовами конфіденційності');
    }
  };

  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <InputField
          control={control}
          name="email"
          label="Електронна пошта"
          errors={errors}
          placeholder="poshta@i.ua"
          keyboardType="email-address"
        />
        <InputField
          control={control}
          name="password"
          label="Пароль"
          errors={errors}
          placeholder="••••••••"
          isPassword
        />
        <InputField
          control={control}
          name="confirmPassword"
          label="Повторіть пароль"
          errors={errors}
          placeholder="••••••••"
          isPassword
        />
      </KeyboardAvoidingView>
      <PrivacyPolicyCheck checked={check} onToggle={() => setCheck(!check)} />
      <PrimaryButton
        text="Зареєструватися"
        onPress={handleSubmit(onPressSend)}
        hint="Зареєструвати ваш акаунт"
        label="Зареєструватися"
        role="button"
        classNames="w-48 self-center mt-32 mb-8"
      />
    </View>
  );
};

export default RegisterForm;
