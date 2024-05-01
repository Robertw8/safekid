import { View } from 'react-native';
import { Icon, SecondaryTitle } from '@/shared/ui';

import { styled } from 'nativewind';
import listeningActiveIcon from './icons/listening-active-icon';
import listeningInactiveIcon from './icons/listening-inactive-icon';

interface ListeningProps {
  listening: boolean;
  classNames?: string;
}

const StyledView = styled(View);

const Listening: React.FC<ListeningProps> = ({ listening, classNames }) => {
  return (
    <StyledView className={`${classNames}`}>
      <Icon xml={listening ? listeningActiveIcon : listeningInactiveIcon} />
      <SecondaryTitle classNames="text-center mt-8">
        {listening ? 'Дитина під наглядом' : 'Система не слухає'}
      </SecondaryTitle>
    </StyledView>
  );
};

export default Listening;
