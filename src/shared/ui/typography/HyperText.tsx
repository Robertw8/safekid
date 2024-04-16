import { styled } from 'nativewind';
import { Text } from 'react-native';

interface HyperTextProps {
    text: string;
    classNames?: string;
};

const HyperTextStyled = styled(Text);

const HyperText: React.FC<HyperTextProps> = ({ text, classNames }) => {
  return (
    <HyperTextStyled className={`font-semibold text-base text-purple underline ${classNames}`}>
      {text}
    </HyperTextStyled>
  );
};

export default HyperText;
