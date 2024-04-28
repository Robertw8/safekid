import { styled } from 'nativewind';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BackButton, NormalText, TertiaryTitle } from '@/shared/ui';

const Header = styled(View);
const Title = styled(View);
const StyledText = styled(Text);

const UserEmail: React.FC = () => {
  const email = 'example@gmail.com';

  return (
    <>
      <Header>
        <BackButton classNames="left-0 top-5" />
        <TertiaryTitle
          children={'Інформація про \nкористувача '}
          classNames="ml-10"
        />
      </Header>
      <Title className="flex flex-row items-center gap-4 mt-[78]">
        <Feather name="at-sign" size={24} color="black" />
        <StyledText className="font-medium text-lg">
          Ваша електронна адреса
        </StyledText>
      </Title>
      <NormalText classNames="text-center mt-4">{email}</NormalText>
    </>
  );
};

export default UserEmail;
