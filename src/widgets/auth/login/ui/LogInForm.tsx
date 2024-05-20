import { useForm, Controller } from 'react-hook-form';
import {
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useEffect, useState } from 'react';
import { Link, router } from 'expo-router';
import { styled } from 'nativewind';
import {
  Icon,
  LabelInput,
  PrimaryButton,
  PrimaryInput,
  closedEyeIcon,
  openEyeIcon,
} from '@/shared/ui';
import { validationLoginSchema } from '@/entities/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import {
  getUserInfoThunk,
  postLoginUserThunk,
} from '@/processes/auth/model/operations';
import {
  selectAuthenticated,
  selectJwtToken,
  selectToken,
  selectUserId,
} from '@/processes/auth/model/selectors';
import { usePushNotifications } from '@/app/providers/NotificationsProvider/model/usePushNotifications';
import { setToken } from '@/processes/auth/model/slice';

const WrapperInputs = styled(View);
const TouchableOpacityStyled = styled(TouchableOpacity);
const WrapperForm = styled(View);
const WrapperButton = styled(View);

const LogInForm = () => {
  const dispatch = useAppDispatch();

  const isUserAuth = useAppSelector(selectAuthenticated);
  const userId = useAppSelector(selectUserId);
  const token = useAppSelector(selectToken);
  const jwtToken = useAppSelector(selectJwtToken);
  const { pushToken } = usePushNotifications();
  const pushTokenData = pushToken?.data;

  console.log('pushTokenData in loginscreen', pushTokenData);

  console.log('isUserAuth in loginscreen', isUserAuth);
  console.log('userId in loginscreen', userId);
  console.log('token in loginscreen', token);
  console.log('jwtToken in loginscreen', jwtToken);

  const [showPassword, setShowPassword] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (token) {
      return;
    }
    dispatch(setToken(pushTokenData))
  }, [token, pushTokenData]);

  useEffect(() => {
    if (!isUserAuth) {
      return;
    }
    if (!userId) {
      dispatch(getUserInfoThunk({ jwtToken: jwtToken as string }));
      return;
    }
    router.navigate('/adult/dashboard' as `${string}:${string}`);
  }, [isUserAuth, userId]);

  const onPressSend = ({ email, password }) => {
    const userData = { email, password, deviceToken: token };
    dispatch(postLoginUserThunk(userData));
  };

  return (
    <WrapperForm className="grow mb-9 w-full">
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
          <View style={{ position: 'relative' }}>
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
                    secureTextEntry={showPassword}
                    classNames={`${errors.password && 'border border-rose-600 text-red'}`}
                  />
                )}
                name="password"
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
            {errors.password && (
              <LabelInput classNames="text-red">
                {errors.password.message}
              </LabelInput>
            )}
          </View>
        </WrapperInputs>
      </KeyboardAvoidingView>
      <Link
        href="/auth/adult/password-reset"
        className="self-center font-normal text-sm leading-normal underline text-black mb-6"
      >
        Забули пароль?
      </Link>
      <WrapperButton className="grow flex justify-end">
        <PrimaryButton
          text="Увійти"
          onPress={handleSubmit(onPressSend)}
          hint="Увійти в свій акаунт"
          label="Увійти"
          role="button"
          classNames="w-48 self-center"
        />
      </WrapperButton>
    </WrapperForm>
  );
};

export default LogInForm;
