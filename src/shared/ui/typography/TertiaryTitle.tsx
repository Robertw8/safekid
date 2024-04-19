import { styled } from 'nativewind';
import { Text } from 'react-native';

interface TertiaryTitleProps {
  children: React.ReactNode | string;
  classNames?: string;
}

const Title = styled(Text);

const TertiaryTitle: React.FC<TertiaryTitleProps> = ({
  children,
  classNames,
}) => {
  return (
    <Title
      className={`font-medium text-xl text-black ${classNames}`}
    >
      {children}
    </Title>
  );
};

export default TertiaryTitle;
