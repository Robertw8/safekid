import { BackButton, PrimaryContainer } from '@/shared/ui';
import { DeleteAccounts, Logout, ProfileList } from '@/widgets/adult';

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
