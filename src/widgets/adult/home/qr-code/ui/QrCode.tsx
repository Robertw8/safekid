import React, { useState, useEffect } from 'react';
import { styled } from 'nativewind';
import QRCode from 'react-qr-code';

import { Text, View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import getDeviceToken from '@/features/listening/api/getDeviceToken';

const Wrapper = styled(View);

// const valueQr = 'https://github.com/Robertw8/safekid';

const QrCode = () => {
  const [deviceToken, setDeviceToken] = useState('');
  const childId = uuidv4();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getDeviceToken();
      setDeviceToken(token);
    };

    fetchToken();
  }, []);

  const generateQrValue = (childId, deviceToken) => {
    return `https://example.com/register?childId=${encodeURIComponent(childId)}&deviceToken=${encodeURIComponent(deviceToken)}`;
  };

  const valueQr = generateQrValue(childId, deviceToken);

  return (
    <Wrapper className="my-auto">
      {/* тимчасиво вивожу на екран те що зашиваю в кур */}
      <Text>Child ID: {childId}</Text>
      <Text>Device Token: {deviceToken}</Text>
      {/* сформована лінка кур  */}
      <Text>QR Value: {valueQr}</Text>

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
