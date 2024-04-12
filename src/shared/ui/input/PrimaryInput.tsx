import { styled } from 'nativewind';
import { TextInput } from 'react-native';

interface PrimaryInputProps {
    onFocus: () => void;
    onBlur: () => void;
    onChangeText: () => void;
    value: string;
    autoFocus?: boolean;
    placeholder?: string;
    keyboardType?: string;
    classNames?: string;
}

const StyledInput = styled(TextInput)

const PrimaryInput: React.FC<PrimaryInputProps> = ({
    onFocus,
    onBlur,
    onChangeText,
    value,
    autoFocus,
    placeholder,
    keyboardType,
    classNames,
}) => {
    return (
    <StyledInput
            //   style={[
            //     stylesLogin.input,
            //     isFocus.email ? stylesLogin.inputFocus : stylesLogin.inputBlur,
            //   ]}
              autoFocus={autoFocus || true}
              onFocus={() => onFocus}
              onBlur={() => onBlur}
              onChangeText={onChangeText}
              value={value}
              placeholder={placeholder || ''}
            keyboardType={keyboardType || "email-address"}
                  className={` ${classNames}`}
            />
)
};

export default PrimaryInput;
