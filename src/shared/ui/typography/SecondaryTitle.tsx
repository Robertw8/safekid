import { styled } from 'nativewind';
import { Text } from 'react-native';

interface SecondaryTitleProps {
  text: string;
  classNames?: string;
}

const Title = styled(Text);

const SecondaryTitle: React.FC<SecondaryTitleProps> = ({
  text,
  classNames,
}) => {
  return (
    <Title
      className={`font-semibold text-2xl text-black-primary ${classNames}`}
    >
      {text}
    </Title>
  );
};

export default SecondaryTitle;
