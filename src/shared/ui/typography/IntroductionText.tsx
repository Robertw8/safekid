import { styled } from 'nativewind';
import { Text } from 'react-native';

interface IntroductionTextProps {
  children: React.ReactNode | string;
  classNames?: string;
}

const Introduction = styled(Text);

const IntroductionText: React.FC<IntroductionTextProps> = ({
  children,
  classNames,
}) => {
  return (
    <Introduction
      className={`font-normal text-sm leading-normal text-black-primary mb-5 ${classNames}`}
    >
      {children}
    </Introduction>
  );
};

export default IntroductionText;
