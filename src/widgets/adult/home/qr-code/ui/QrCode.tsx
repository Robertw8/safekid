import { styled } from 'nativewind';
import { View } from 'react-native';
import QRCode from 'react-qr-code';

import useAppSelector from '@/shared/lib/hooks/useAppSelector';
import { selectUserData, selectUserId } from '@/processes/auth/model/selectors';

const Wrapper = styled(View);

const QrCode: React.FC = () => {
  const userId = useAppSelector(selectUserId);
  console.log(userId);

  const generateQrValue = (parentId: string | null) => {
    return JSON.stringify({
      parentId,
      mobileTitle: 'PABLO',
      deviceId: 'testdevicetoken2',
    });
  };

  const valueQr = generateQrValue(userId);

  return (
    <Wrapper className="my-auto">
      <QRCode
        bgColor={'transparent'}
        size={162}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        value={valueQr}
        viewBox={`0 0 256 256`}
      />
    </Wrapper>
  );
};

export default QrCode;
