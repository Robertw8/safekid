import { useEffect, useState } from 'react';
import { BackButton, PrimaryContainer } from '@/shared/ui';
import { checkMicrophonePermission, useListening } from '@/shared/lib';

import { Listening } from '@/features/listening';
import { PermissionSettings } from '@/widgets/kid';
import { PermissionResponse } from 'expo-camera';

const KidHomeScreen: React.FC = () => {
  const [permission, setPermission] = useState<PermissionResponse | null>(null);
  const { enabled } = useListening();

  useEffect(() => {
    checkMicrophonePermission().then(res => setPermission(res));
  }, []);

  return (
    <PrimaryContainer classNames="items-center">
      <BackButton />
      {permission?.granted ? (
        <Listening listening={enabled} />
      ) : (
        <PermissionSettings />
      )}
    </PrimaryContainer>
  );
};

export default KidHomeScreen;
