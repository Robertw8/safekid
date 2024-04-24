import { styled } from 'nativewind';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { BackButton, PrimaryTitle } from '@/shared/ui';
import { NewPasswordForm } from '@/widgets/auth';

const Wrapper = styled(View);

const NewPasswordScreen: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper className="px-4 pt-40 pb-12 h-full bg-white flex items-center">
        <BackButton />
        <PrimaryTitle classNames="mb-8">Введіть новий пароль</PrimaryTitle>
        <NewPasswordForm />
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};
40
export default NewPasswordScreen;
