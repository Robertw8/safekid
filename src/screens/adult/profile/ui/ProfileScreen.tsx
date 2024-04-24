import { ProfileList } from '@/widgets/profile-list';
import { BackButton, PrimaryContainer } from '@/shared/ui';
import { DeleteAccounts } from '@/widgets/delete-accounts';
import { Logout } from '@/widgets/logout';

const ProfileScreen = () => {
  return (
    <PrimaryContainer classNames="justify-start">
      <BackButton />
      <ProfileList />
      <DeleteAccounts />
      <Logout />
    </PrimaryContainer>
  );
};

export default ProfileScreen;
