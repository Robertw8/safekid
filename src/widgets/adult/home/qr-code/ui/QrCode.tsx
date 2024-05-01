import { styled } from 'nativewind';
import { View } from 'react-native';
import QRCode from 'react-qr-code';

import useAppSelector from '@/shared/lib/hooks/useAppSelector';

const Wrapper = styled(View);

const QrCode: React.FC = () => {
  const parentId = useAppSelector(state => state.userData?.dto?.id);

  const generateQrValue = (parentId: string | null) => {
    return JSON.stringify({ parentId });
  };

  const valueQr = generateQrValue(parentId);

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
