import { styled } from 'nativewind';
import { Switch as BaseSwitch } from '@ant-design/react-native';
import type { SwitchProps as BaseSwitchProps } from '@ant-design/react-native/lib/switch/Switch';

interface SwitchProps extends BaseSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void | Promise<void>;
  classNames?: string;
}

const StyledSwitch = styled(BaseSwitch);

const Switch: React.FC<SwitchProps> = ({ checked, onChange, classNames }) => {
  return (
    <StyledSwitch
      color="#0D8065"
      checked={checked}
      className={`${classNames}`}
      onChange={onChange}
    />
  );
};

export default Switch;
