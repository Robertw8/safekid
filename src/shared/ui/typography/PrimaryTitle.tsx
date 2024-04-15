import { styled } from 'nativewind';
import { Text } from 'react-native';

interface PrimaryTitleProps {
  children: React.ReactNode | string;
  classNames?: string;
}

const Title = styled(Text);

const PrimaryTitle: React.FC<PrimaryTitleProps> = ({
  children,
  classNames,
}) => {
  return (
    <Title className={`font-semibold text-4xl text-black ${classNames}`}>
      {children}
    </Title>
  );
};

export default PrimaryTitle;
