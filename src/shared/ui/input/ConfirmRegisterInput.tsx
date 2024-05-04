import { styled } from 'nativewind';
import { MutableRefObject } from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';

interface ConfirmRegisterInputProps {
  onChangeText: (text: string) => void;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  classNames?: string;
  inputRef: MutableRefObject<null>;
  maxLength?: number;
};

const StyledInput = styled(TextInput)

const ConfirmRegisterInput: React.FC<ConfirmRegisterInputProps> = ({
  onChangeText,
  value,
  keyboardType,
  classNames,
  inputRef,
  maxLength,
}) => {
  return (
    <StyledInput
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType || "default"}
      className={`text-base	size-9 mr-2 p-3 rounded-lg	text-center	bg-gray-input ${classNames}`}
      maxLength={maxLength}
      ref={inputRef}
    />
  );
};

export default ConfirmRegisterInput;
