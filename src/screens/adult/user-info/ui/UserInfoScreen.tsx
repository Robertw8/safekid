import { PrimaryContainer } from '@/shared/ui';
import { UserEmail } from '@/widgets/adult';

const UserInfoScreen: React.FC = () => {
  return (
    <PrimaryContainer classNames="justify-start">
      <UserEmail />
    </PrimaryContainer>
  );
};

export default UserInfoScreen;
