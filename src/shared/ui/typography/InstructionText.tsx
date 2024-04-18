import { styled } from 'nativewind';
import { Text } from 'react-native';

interface InstructionTextProps {
  children: React.ReactNode | string;
  classNames?: string;
}

const Instruction = styled(Text);

const InstructionText: React.FC<InstructionTextProps> = ({
  children,
  classNames,
}) => {
  return (
    <Instruction
      className={`font-normal text-xs leading-normal text-black mb-4 ${classNames}`}
    >
      {children}
    </Instruction>
  );
};

export default InstructionText;
