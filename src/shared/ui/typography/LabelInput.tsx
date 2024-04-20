import { styled } from 'nativewind';
import { Text } from 'react-native';

interface LabelInputProps {
  children: React.ReactNode | string;
  classNames?: string;
}

const Label = styled(Text);

const LabelInput: React.FC<LabelInputProps> = ({ children, classNames }) => {
  return (
    <Label className={`font-medium text-base/5 text-black border-rose-600 ${classNames}`}>
      {children}
    </Label>
  );
};

export default LabelInput;
