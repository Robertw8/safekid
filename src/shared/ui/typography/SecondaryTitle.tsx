import { styled } from 'nativewind';
import { Text } from 'react-native';

interface SecondaryTitleProps {
  children: React.ReactNode | string;
  classNames?: string;
}

const Title = styled(Text);

const SecondaryTitle: React.FC<SecondaryTitleProps> = ({
  children,
  classNames,
}) => {
  return (
    <Title
      className={`font-semibold text-2xl text-black-primary ${classNames}`}
    >
      {children}
    </Title>
  );
};

export default SecondaryTitle;
