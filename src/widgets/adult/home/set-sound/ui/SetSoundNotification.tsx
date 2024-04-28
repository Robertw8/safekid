import { styled } from 'nativewind';
import { useState } from 'react';
import { Text, View } from 'react-native';

import { BackButton, Switch, TertiaryTitle } from '@/shared/ui';

const Header = styled(View);
const Title = styled(View);
const StyledText = styled(Text);

const SetSoundNotification: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Header>
        <BackButton classNames="left-0 top-1" />
        <TertiaryTitle children={'Налаштувати сповіщення'} classNames="ml-10" />
      </Header>
      <Title className="flex flex-row justify-between items-center mt-[63]">
        <StyledText className="font-medium text-xl">
          {`Вимкнути звукове \nсповіщення`}
        </StyledText>
        <Switch
          checked={checked}
          onChange={() => setChecked(prevState => !prevState)}
        />
      </Title>
    </>
  );
};

export default SetSoundNotification;
