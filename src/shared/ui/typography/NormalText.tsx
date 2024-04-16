import { styled } from 'nativewind';
import { Text } from 'react-native';

interface NormalTextProps {
    text: string;
    classNames?: string;
};

const NormalTextStyled = styled(Text);

const NormalText: React.FC<NormalTextProps> = ({ text, classNames }) => {
  return (
    <NormalTextStyled className={`font-normal text-base text-gray-primary ${classNames}`}>
      {text}
    </NormalTextStyled>
  );
};

export default NormalText;
