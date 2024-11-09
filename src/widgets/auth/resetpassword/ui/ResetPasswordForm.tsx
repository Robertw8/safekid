import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/shared/lib';
import { styled } from 'nativewind';
import { NormalText, PrimaryButton, SecondaryTitle } from '@/shared/ui';
import { router } from 'expo-router';
import { validationLoginSchema } from '@/entities/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from '@/shared/ui/input/InputField';
import { postSendResetCodeThunk } from '@/processes/auth/model/operations';

const TextWrapper = styled(View);
const WrapperButton = styled(View);

const ResetPasswordForm = () => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationLoginSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = ({ email }: { email: string }) => {
    console.log('Email:', email);
    router.navigate('/auth/adult/confirm-reset');
  };

  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <TextWrapper className="mb-6">
          <SecondaryTitle>Забули пароль?</SecondaryTitle>
          <NormalText classNames="mt-2">
            Введіть вашу електронну пошту
          </NormalText>
        </TextWrapper>
        <InputField
          control={control}
          name="email"
          label="Електронна пошта"
          errors={errors}
          placeholder="poshta@i.ua"
          keyboardType="email-address"
        />
      </KeyboardAvoidingView>
      <WrapperButton className="grow flex justify-center">
        <PrimaryButton
          text="Відновити пароль"
          onPress={handleSubmit(onSubmit)}
          hint="Відновити пароль"
          label="Відновити пароль"
          role="button"
          classNames="w-48 self-center mt-24"
        />
      </WrapperButton>
    </View>
  );
};

export default ResetPasswordForm;
