import QRCode from 'react-qr-code';
import { styled } from 'nativewind';
import { View } from 'react-native';

const Wrapper = styled(View);

const valueQr = 'https://github.com/Robertw8/safekid';

const QrCode: React.FC = () => {
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
