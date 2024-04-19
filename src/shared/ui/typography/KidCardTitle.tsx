import { styled } from 'nativewind';
import { Text } from 'react-native';

interface KidCardTitleProps {
  children: string;
  classNames?: string;
}

const Title = styled(Text);

const KidCardTitle: React.FC<KidCardTitleProps> = ({
  children,
  classNames,
}) => {
  return (
    <Title className={`text-lg font-semibold text-dark-blue ${classNames}`}>
      {children}
    </Title>
  );
};

export default KidCardTitle;
