import { useForm } from 'react-hook-form';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { useEffect } from 'react';
import { Link, router } from 'expo-router';
import { styled } from 'nativewind';
import { PrimaryButton } from '@/shared/ui';
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
import { InputField } from '@/shared/ui/input/InputField';

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
    dispatch(setToken(pushTokenData));
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
      </KeyboardAvoidingView>
      <Link
        href="/auth/adult/password-reset"
        className="self-center text-sm underline text-black mb-6"
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
          classNames="w-48 self-center mt-56 mb-8"
        />
      </WrapperButton>
    </View>
  );
};

export default LogInForm;
