import { styled } from 'nativewind';
import { View } from 'react-native';
import { BackButton, PrimaryContainer, SecondaryTitle } from '@/shared/ui';

import { QrCode } from '@/widgets/adult';

const Wrapper = styled(View);

const QrCodeScreen: React.FC = () => {
  return (
    <PrimaryContainer classNames="justify-start">
      <Wrapper className="h-full flex items-center">
        <BackButton classNames=" top-6" />
        <SecondaryTitle classNames="text-center w-[263]">
          Відскануйте QR-код пристроєм дитини
        </SecondaryTitle>
        <QrCode />
      </Wrapper>
    </PrimaryContainer>
  );
};

export default QrCodeScreen;
