import { styled } from 'nativewind';
import { KeyboardTypeOptions, TextInput } from 'react-native';

interface PrimaryInputProps {
    // onFocus: () => void;
    // onBlur: () => void;
    onChangeText: (text: string) => void;
    value: string;
    autoFocus?: boolean;
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions;
    classNames?: string;
    secureTextEntry?: boolean;
}

const StyledInput = styled(TextInput)

const PrimaryInput: React.FC<PrimaryInputProps> = ({
    // onFocus,
    // onBlur,
    onChangeText,
    value,
    autoFocus,
    placeholder,
    keyboardType,
    classNames,
    secureTextEntry,
}) => {
    return (
        <StyledInput
            autoFocus={autoFocus || false}
            // onFocus={() => onFocus}
            // onBlur={() => onBlur}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder || ''}
            keyboardType={keyboardType || "default"}
            className={`h-12 w-full py-3 px-4 rounded-lg bg-gray-input ${classNames}`}
            secureTextEntry={secureTextEntry || false}
        />
    )
};

export default PrimaryInput;
