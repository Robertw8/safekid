import { styled } from 'nativewind';
import { BackButton, PrimaryContainer, SecondaryTitle } from '@/shared/ui';
import { View } from 'react-native';
import { QrCode } from '@/widgets/qrCode';

const Wrapper = styled(View);

const QrCodeScreen: React.FC = () => {
  return (
    <PrimaryContainer classNames="justify-start">
      <Wrapper className="h-full flex p-4 items-center">
        <BackButton classNames=" top-10" />
        <SecondaryTitle classNames="text-center w-[263]">
          Відскануйте QR-код пристроєм дитини
        </SecondaryTitle>
        <QrCode />
      </Wrapper>
    </PrimaryContainer>
  );
};

export default QrCodeScreen;
