import { PrimaryContainer } from '@/shared/ui';
import { CommunicationChild } from '@/widgets/adult';

const CommunicationChildScreen: React.FC = () => {
  return (
    <PrimaryContainer classNames="justify-start">
      <CommunicationChild />
    </PrimaryContainer>
  );
};

export default CommunicationChildScreen;
