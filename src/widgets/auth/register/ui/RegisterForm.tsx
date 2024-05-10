import React, { useEffect, useState } from 'react';
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
import { Link, router } from 'expo-router';
import { styled } from 'nativewind';
import { validationRegisterSchema } from '@/entities/auth';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { selectUserData } from '@/processes/auth/model/selectors';
import {
  postRegisterUserThunk,
  setUserRole,
} from '@/processes/auth/model/operations';
import { usePushNotifications } from '@/app/providers/NotificationsProvider/model/usePushNotifications';

const WrapperInputs = styled(View);
const TouchableOpacityStyled = styled(TouchableOpacity);
const WrapperForm = styled(View);
const WrapperButton = styled(View);

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const [showPasswordFirst, setShowPasswordFirst] = useState(true);
  const [showPasswordSecond, setShowPasswordSecond] = useState(true);
  const [check, setCheck] = useState(false);

  const { pushToken } = usePushNotifications();
  const regUserData = useAppSelector(selectUserData);

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
    if (!regUserData) {
      return;
    }
    router.navigate('/auth/adult/confirm-register' as `${string}:${string}`);
  }, [regUserData]);

  const onPressSend = ({ email, password }) => {
    if (check) {
      const userData = {
        email,
        password,
        deviceToken: pushToken?.data,
        privacyPolicyAgreement: check,
      };
      dispatch(postRegisterUserThunk(userData));
      dispatch(setUserRole('adult'));
    } else {
      alert('Підтвердіть згоду з умовами конфіденційності');
    }
  };

  return (
    <WrapperForm className="grow mb-9 w-full flex">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <WrapperInputs className="flex justify-center gap-4 mb-6">
          <View>
            <LabelInput classNames="mb-2">Електронна пошта</LabelInput>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <PrimaryInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="example@email.com"
                  keyboardType="email-address"
                  classNames={`${errors.email && 'border border-rose-600 text-red'}`}
                />
              )}
              name="email"
            />
            {errors.email && (
              <LabelInput classNames="text-red">
                {errors.email.message}
              </LabelInput>
            )}
          </View>
          <View>
            <LabelInput classNames="mb-2">Пароль</LabelInput>
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
            {errors.password && (
              <LabelInput classNames="text-red">
                {errors.password.message}
              </LabelInput>
            )}
          </View>
          <View>
            <LabelInput classNames="mb-2">Повторіть пароль</LabelInput>
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
            {errors.confirmPassword && (
              <LabelInput classNames="text-red">
                {errors.confirmPassword.message}
              </LabelInput>
            )}
          </View>
        </WrapperInputs>
      </KeyboardAvoidingView>
      <CheckField checked={check} onPress={() => setCheck(!check)}>
        <Link href="/auth/adult/privacy-police">
          <NormalText
            classNames={`font-normal text-xs leading-normal ${check ? 'text-black-100' : 'text-red'}`}
          >
            Згоден з
          </NormalText>{' '}
          <HyperText classNames="font-normal text-xs  leading-normal">
            умовами та політикою конфіденційності
          </HyperText>
        </Link>
      </CheckField>
      <WrapperButton className="grow flex justify-end">
        <PrimaryButton
          text="Зареєструватися"
          onPress={handleSubmit(onPressSend)}
          hint="Зареєструвати ваш акаунт"
          label="Зареєструватися"
          role="button"
          classNames="w-48 self-center"
        />
      </WrapperButton>
    </WrapperForm>
  );
};

export default RegisterForm;
