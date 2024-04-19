import { BackButton, PrimaryContainer } from '@/shared/ui';
import { HomeKidsList } from '@/widgets/adult';

const DashboardScreen: React.FC = () => {
  return (
    <PrimaryContainer>
      <BackButton />
      <HomeKidsList />
    </PrimaryContainer>
  );
};

export default DashboardScreen;
