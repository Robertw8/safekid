import { styled } from 'nativewind';
import framesIcon from './icons/frames-icon';

import { BackButton, Icon } from '@/shared/ui';
import { View } from '@ant-design/react-native';
import { Camera as ExpoCamera } from 'expo-camera';

interface CameraProps {
  scanned: boolean;
  handleBarCodeScanned: ({ data }: { data: unknown }) => void;
}

const CameraWrapper = styled(View);
const StyledCamera = styled(ExpoCamera);

const Camera: React.FC<CameraProps> = ({ scanned, handleBarCodeScanned }) => {
  return (
    <CameraWrapper className="justify-center items-center">
      <BackButton whiteIcon />
      <StyledCamera
        className="w-full h-full"
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        responsiveOrientationWhenOrientationLocked
      />
      <Icon xml={framesIcon} classNames="absolute" />
    </CameraWrapper>
  );
};

export default Camera;
