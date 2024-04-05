import { styled } from 'nativewind';
import { Text } from 'react-native';

interface PrimaryTitleProps {
  text: string;
  classNames?: string;
}

const Title = styled(Text);

const PrimaryTitle: React.FC<PrimaryTitleProps> = ({ text, classNames }) => {
  return (
    <Title className={`font-semibold text-4xl text-black ${classNames}`}>
      {text}
    </Title>
  );
};

export default PrimaryTitle;
