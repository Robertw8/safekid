import { styled } from 'nativewind';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { IconName } from '@/shared/types';

interface ActionButtonProps {
  iconName: IconName;
  onPress?: () => void;
  classNames?: string;
}

const Button = styled(TouchableOpacity);

const ActionButton: React.FC<ActionButtonProps> = ({
  onPress,
  classNames,
  iconName,
}) => {
  return (
    <Button accessible={true} onPress={onPress} className={`m-2 ${classNames}`}>
      <Entypo name={iconName} size={24} color="black" />
    </Button>
  );
};

export default ActionButton;
