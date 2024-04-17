import { styled } from 'nativewind';
import { Text } from 'react-native';

interface NormalTextProps {
  children: React.ReactNode | string;
  classNames?: string;
};

const NormalTextStyled = styled(Text);

const NormalText: React.FC<NormalTextProps> = ({ children, classNames }) => {
  return (
    <NormalTextStyled className={`font-normal text-base text-gray-primary ${classNames}`}>
      {children}
    </NormalTextStyled>
  );
};

export default NormalText;
