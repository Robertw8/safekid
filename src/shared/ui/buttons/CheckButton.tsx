import { styled } from 'nativewind';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AccessibilityRole, TouchableOpacity } from 'react-native';


interface CheckButtonProps {
    checked: boolean;
    onPress: () => void;
    hint?: string;
    label?: string;
    role?: AccessibilityRole;
    classNames?: string;
    activeOpacity?: number;
}

const Check = styled(TouchableOpacity);

const CheckButton: React.FC<CheckButtonProps> = ({
    checked,
    hint,
    label,
    role,
    onPress,
    classNames,
    activeOpacity,
}) => {
    return (
        <Check
            onPress={onPress}
            accessibilityLabel={label || 'Погодитись з умовами'}
            accessibilityHint={hint || 'Погодження з умовами'}
            accessibilityRole={role || 'button'}
            accessible={true}
            className={`${classNames}`}
            activeOpacity={activeOpacity || 0.75}
        >
            {checked ?
                (<Ionicons name="checkmark-circle" size={20} color="#ACACAC" />)
                
                : (<Feather name="circle" size={20} color="#ACACAC" />)
            }
        </Check>
    );
};

export default CheckButton;
