import { styled } from 'nativewind';
import { Modal, View } from 'react-native';

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  classNames?: string;
}

const ModalContainer = styled(View);
const ModalContent = styled(View);

const PrimaryModal: React.FC<ModalProps> = ({
  visible,
  onCancel,
  onConfirm,
  header,
  body,
  footer,
  classNames,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <ModalContainer
        className={` rounded-lg ml-16 mt-20 bg-white w-64 h-64 ${classNames}`}
      >
        <ModalContent className={`items-center mt-4 ${classNames}`}>
          {header && <View>{header}</View>}
          {body && <View>{body}</View>}
          {footer && <View>{footer}</View>}
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default PrimaryModal;
