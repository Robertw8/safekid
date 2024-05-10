import { useState } from 'react';
import { router } from 'expo-router';

import { Camera as ExpoCamera } from 'expo-camera';
import {
  BackButton,
  PrimaryButton,
  PrimaryContainer,
  SecondaryTitle,
} from '@/shared/ui';

const KidRegisterScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const requestCameraPermission = async () => {
    const { status } = await ExpoCamera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  return (
    <PrimaryContainer>
      <BackButton />
      <SecondaryTitle>Відскануйте QR код на пристрої дорослого</SecondaryTitle>
      <PrimaryButton
        text="Сканувати"
        onPress={() =>
          hasPermission
            ? requestCameraPermission()
            : router.navigate('/auth/kid/register/scan')
        }
        classNames="w-48 mt-12 mx-auto"
      />
    </PrimaryContainer>
  );
};

export default KidRegisterScreen;
