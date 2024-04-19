import { styled } from 'nativewind';
import { Text } from 'react-native';
import type { KidStatus } from '@/shared/types';

interface KidListeningStatusProps {
  status: KidStatus;
  classNames?: string;
}

const StyledText = styled(Text);

const KidListeningStatus: React.FC<KidListeningStatusProps> = ({
  status,
  classNames,
}) => {
  const setStatusText = () => {
    switch (status) {
      case 'active':
        return 'Дитина під наглядом';
      case 'inactive':
        return 'Система не слухає';
      case 'error':
        // return 'Система не працює!\nУвімкніть мікрофон!';
        return 'Увімкніть мікрофон!';
    }
  };

  return (
    <StyledText
      className={`text-base ${
        status === 'error' ? 'text-red' : 'text-dark-blue'
      } ${classNames}`}
    >
      {setStatusText()}
    </StyledText>
  );
};

export default KidListeningStatus;
