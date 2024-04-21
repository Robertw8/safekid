import { styled } from 'nativewind';
import { Text } from 'react-native';

interface HyperTextProps {
  children: React.ReactNode | string;
  classNames?: string;
}

const HyperTextStyled = styled(Text);

const HyperText: React.FC<HyperTextProps> = ({ children, classNames }) => {
  return (
    <HyperTextStyled
      className={`font-semibold text-base text-purple underline ${classNames}`}
    >
      {children}
    </HyperTextStyled>
  );
};

export default HyperText;
