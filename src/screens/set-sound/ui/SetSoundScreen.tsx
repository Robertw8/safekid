import { PrimaryContainer } from '@/shared/ui';
import { SetSoundNotification } from '@/widgets/adult';

const SetSoundScreen: React.FC = () => {
  return (
    <PrimaryContainer classNames="justify-start">
      <SetSoundNotification />
    </PrimaryContainer>
  );
};

export default SetSoundScreen;
