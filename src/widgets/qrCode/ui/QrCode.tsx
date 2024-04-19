import QRCode from 'react-qr-code';
import { styled } from 'nativewind';
import { View } from 'react-native';

const Wrapper = styled(View);

const QrCode = () => {
  return (
    <Wrapper className="my-auto">
      <QRCode
        bgColor={'transparent'}
        size={162}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        value={''}
        viewBox={`0 0 256 256`}
      />
    </Wrapper>
  );
};

export default QrCode;
