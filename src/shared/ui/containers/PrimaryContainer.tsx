import { styled } from 'nativewind';
import { View, ScrollView } from 'react-native';

interface PrimaryContainerProps {
  children: React.ReactNode;
  classNames?: string;
  scrollable?: boolean;
}

const Container = styled(View);
const ScrollContainer = styled(ScrollView);

const PrimaryContainer: React.FC<PrimaryContainerProps> = ({
  children,
  classNames,
  scrollable,
}) => {
  return scrollable ? (
    <ScrollContainer
      className={`px-4 py-16 h-full flex justify-center ${classNames}`}
    >
      {children}
    </ScrollContainer>
  ) : (
    <Container
      className={`px-4 py-16 h-full flex justify-center ${classNames}`}
    >
      {children}
    </Container>
  );
};

export default PrimaryContainer;
