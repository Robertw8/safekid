import { styled } from 'nativewind';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  classNames?: string;
}

const ModalContainer = styled(View);
const ModalContent = styled(View);
const ModalButton = styled(TouchableOpacity);

const PrimaryModal: React.FC<ModalProps> = ({
  visible,
  onClose,
  title,
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
          {title && <View>{title}</View>}
          {body && <View>{body}</View>}
          {footer && (
            <View>
              {footer}
              <ModalButton
                onPress={onClose}
                className={`items-center ${classNames}`}
              >
                <Text>Close Modal</Text>
              </ModalButton>
            </View>
          )}
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default PrimaryModal;
