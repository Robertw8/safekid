import { BackButton, PrimaryContainer } from '@/shared/ui';
import { InformationList } from '@/widgets/information-list';

const InformationScreen = () => {
  return (
    <PrimaryContainer classNames="justify-start">
      <BackButton />

      <InformationList />
    </PrimaryContainer>
  );
};

export default InformationScreen;
