import { BackButton, PrimaryContainer } from '@/shared/ui';
import { AddKidButton, HomeKidsList } from '@/widgets/adult';

const DashboardScreen: React.FC = () => {
  return (
    <PrimaryContainer>
      <HomeKidsList />
      <BackButton />
      <AddKidButton />
    </PrimaryContainer>
  );
};

export default DashboardScreen;
