import { PrimaryContainer } from '@/shared/ui';
import { UserEmail } from '@/widgets/user-info';

const UserInfoScreen = () => {
  return (
    <PrimaryContainer classNames="justify-start">
      <UserEmail />
    </PrimaryContainer>
  );
};

export default UserInfoScreen;
