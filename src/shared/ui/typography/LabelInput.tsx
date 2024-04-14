import { styled } from 'nativewind';
import { Text } from 'react-native';

interface LabelInputProps {
  text: string;
  classNames?: string;
}

const Label = styled(Text);

const LabelInput: React.FC<LabelInputProps> = ({ text, classNames }) => {
  return (
    <Label className={`font-medium text-base/5 text-black mb-2 ${classNames}`}>
      {text}
    </Label>
  );
};

export default LabelInput;
