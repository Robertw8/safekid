import { useState } from 'react';
import { useAppDispatch, useListening } from '@/shared/lib';
import { router } from 'expo-router';
import { styled } from 'nativewind';

import {
  BackButton,
  PrimaryButton,
  PrimaryContainer,
  SecondaryTitle,
} from '@/shared/ui';
import { Camera } from '@/widgets/kid';
import { Camera as ExpoCamera } from 'expo-camera';
import { Link } from 'expo-router';

const ScanScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);

  const requestCameraPermission = async () => {
    const { status } = await ExpoCamera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    console.log(data);
  };

  return (
    <>
      {!hasPermission ? (
        <PrimaryContainer>
          <BackButton />
          <SecondaryTitle>
            Відскануйте QR код на пристрої дорослого
          </SecondaryTitle>
          <PrimaryButton
            text="Сканувати"
            onPress={requestCameraPermission}
            classNames="w-48 mt-12 mx-auto"
          />
          <Link href="/kid/home" style={{ textAlign: 'center', marginTop: 56 }}>
            Kid homepage
          </Link>
        </PrimaryContainer>
      ) : (
        <Camera scanned={scanned} handleBarCodeScanned={handleBarCodeScanned} />
      )}
    </>
  );
};

export default ScanScreen;
