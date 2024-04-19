import { CheckButton } from '@/shared/ui';
import { styled } from 'nativewind';
import { View } from 'react-native';

interface CheckFieldProps {
    children: React.ReactNode | string;
    checked: boolean;
    onPress: () => void;
    classNames?: string;
};

const WrapperCheckField = styled(View);

const CheckField: React.FC<CheckFieldProps> = ({children, checked, onPress, classNames}) => {
    return (
        <WrapperCheckField className={`flex flex-row gap-2 items-center mb-6 ${classNames}`}>
            <CheckButton checked={checked} onPress={onPress} />
            {children}
        </WrapperCheckField>
    )
};

export default CheckField;
