import { useState } from 'react';
import { router } from 'expo-router';

import {
  BackButton,
  PrimaryButton,
  PrimaryContainer,
  SecondaryTitle,
} from '@/shared/ui';
import { Camera } from 'expo-camera';
import { styled } from 'nativewind';

const StyledCamera = styled(Camera);

const ScanScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean | string>(false);

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleBarCodeScanned = ({}) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    router.replace('/dashboard');
  };

  return (
    <PrimaryContainer>
      <BackButton
        label="Go back"
        hint="Go to the last page you visited"
        onPress={() => router.replace('/welcome')}
      />
      {!hasPermission ? (
        <>
          <SecondaryTitle>
            Відскануйте QR код на пристрої дорослого
          </SecondaryTitle>
          <PrimaryButton
            text="Сканувати"
            onPress={requestCameraPermission}
            classNames="w-48 mt-12 mx-auto"
          />
        </>
      ) : (
        <StyledCamera
          className="w-full h-96"
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          // barcodeScannerSettings={}
        />
      )}
    </PrimaryContainer>
  );
};

export default ScanScreen;
