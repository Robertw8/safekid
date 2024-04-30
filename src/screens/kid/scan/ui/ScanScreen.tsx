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
import { Camera } from 'expo-camera';
import { Link } from 'expo-router';
import { registerKid } from '@/features/kids';

const StyledCamera = styled(Camera);

const ScanScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean | string>(false);
  const dispatch = useAppDispatch();
  const { deviceToken } = useListening();

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleBarCodeScanned = ({ data }) => {
    // setScanned(true);
    dispatch(
      registerKid({
        parentId: 'xxx',
        deviceId: deviceToken,
        mobileTitle: '*Phone name',
      })
    );

    // router.navigate('/kid/home');
  };

  return (
    <PrimaryContainer>
      <BackButton />
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
      <Link href="/kid/home" style={{ textAlign: 'center', marginTop: 56 }}>
        Kid homepage
      </Link>
    </PrimaryContainer>
  );
};

export default ScanScreen;
