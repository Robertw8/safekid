import { ResetPasswordForm } from '@/widgets/auth';
import { View } from 'react-native';
import { BackButton, Icon, chatIcon, messageIcon } from '@/shared/ui';
import { styled } from 'nativewind';

const Wrapper = styled(View);

const ResetPasswordScreen: React.FC = () => {
  return (
    <Wrapper className="px-4 pt-10 h-full bg-white flex">
      <BackButton />
      <Icon xml={chatIcon} classNames={`ml-[320px] mt-6`} />
      <Icon xml={messageIcon} classNames={`ml-14 mt-10`} />
      <ResetPasswordForm />
    </Wrapper>
  );
};
export default ResetPasswordScreen;
