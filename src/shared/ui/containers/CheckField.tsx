import CheckButton from '../buttons/CheckButton';
import { styled } from 'nativewind';
import { View } from 'react-native';

interface CheckFieldProps {
  children: React.ReactNode | string;
  checked: boolean;
  onPress: () => void;
}

const WrapperCheckField = styled(View);

const CheckField: React.FC<CheckFieldProps> = ({
  children,
  checked,
  onPress,
}) => {
  return (
    <WrapperCheckField
      className={`flex flex-row items-center`}
    >
      <CheckButton checked={checked} onPress={onPress} />
      {children}
    </WrapperCheckField>
  );
};

export default CheckField;
