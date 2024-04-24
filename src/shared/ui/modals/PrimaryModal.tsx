import { styled } from 'nativewind';
import { Modal, View } from 'react-native';

import { SecondaryTitle, NormalText } from '@/shared/ui';

interface ModalProps {
  visible: boolean;
  classNames?: string;
  body?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const ModalContainer = styled(View);
const ModalContent = styled(View);
const HeaderTitle = styled(SecondaryTitle);
const BodyText = styled(NormalText);

const PrimaryModal: React.FC<ModalProps> = ({
  visible,
  header,
  body,
  footer,
  classNames,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <ModalContainer
        className={` rounded-lg mt-48 bg-slate-50 w-full p-4 ${classNames}`}
      >
        <ModalContent className={`items-center mt-4 ${classNames}`}>
          {header && <HeaderTitle>{header}</HeaderTitle>}
          {body && <BodyText>{body}</BodyText>}
          {footer && <View>{footer}</View>}
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default PrimaryModal;
