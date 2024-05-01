import { styled } from 'nativewind';
import { useState, useEffect } from 'react';

import { Text, View } from 'react-native';
import { BackButton, Switch, TertiaryTitle } from '@/shared/ui';
import { setEnabled, selectEnabled } from '@/features/listening';

import useAppSelector from '@/shared/lib/hooks/useAppSelector';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch';

const Header = styled(View);
const Title = styled(View);
const StyledText = styled(Text);

const SetSoundNotification: React.FC = () => {
  const dispatch = useAppDispatch();
  const isEnabled = useAppSelector(selectEnabled);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(isEnabled);
  }, [isEnabled]);

  const handleSwitchChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    dispatch(setEnabled(newChecked));
  };

  return (
    <>
      <Header>
        <BackButton classNames="left-0 top-1" />
        <TertiaryTitle children={'Налаштувати сповіщення'} classNames="ml-10" />
      </Header>
      <Title className="flex flex-row justify-between items-center mt-[63]">
        <StyledText className="font-medium text-xl">
          {checked
            ? `Вимкнути звукове \nсповіщення`
            : `Ввімкнути звукове \nсповіщення`}
        </StyledText>
        <Switch checked={checked} onChange={handleSwitchChange} />
      </Title>
    </>
  );
};

export default SetSoundNotification;
