import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  Icon,
  LabelInput,
  PrimaryButton,
  PrimaryInput,
  closedEyeIcon,
  openEyeIcon,
} from '@/shared/ui';
import { router } from 'expo-router';
import { styled } from 'nativewind';
import { validationNewPasswordSchema } from '@/entities/auth';

const WrapperInputs = styled(View);
const TouchableOpacityStyled = styled(TouchableOpacity);
const WrapperForm = styled(View);

const NewPasswordForm = () => {
  const [showPasswordFirst, setShowPasswordFirst] = useState(true);
  const [showPasswordSecond, setShowPasswordSecond] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationNewPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onPressSend = (formData) => {
      console.log(formData);
      router.navigate('/adult/instruction' as `${string}:${string}`);
  };

  return (
    <WrapperForm className="grow mb-9 w-full">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <WrapperInputs className="flex justify-center gap-4 mb-6">
          <View >
            <LabelInput classNames='mb-2'>Новий пароль</LabelInput>
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
      <PrimaryButton
        text="Встановити новий пароль"
        onPress={handleSubmit(onPressSend)}
        hint="Встановити новий пароль"
        label="Встановити новий пароль"
        role="button"
        classNames="w-64 self-center mt-auto"
      />
    </WrapperForm>
  );
};

export default NewPasswordForm;