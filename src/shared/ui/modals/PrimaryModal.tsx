import { styled } from 'nativewind';

import { Modal, View } from 'react-native';
import SecondaryTitle from '../typography/SecondaryTitle';
import NormalText from '../typography/NormalText';

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
const Overlay = styled(View);

const PrimaryModal: React.FC<ModalProps> = ({
  visible,
  header,
  body,
  footer,
  classNames,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <Overlay
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        className="absolute inset-0 h-full w-full flex justify-center items-center"
      >
        <ModalContainer className={` bg-slate-50 w-full p-4 ${classNames}`}>
          <ModalContent className={`items-center mt-4 ${classNames}`}>
            {header && (
              <HeaderTitle classNames="text-center mb-4">{header}</HeaderTitle>
            )}
            {body && <BodyText classNames="text-center">{body}</BodyText>}
            {footer && <View>{footer}</View>}
          </ModalContent>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
};

export default PrimaryModal;
