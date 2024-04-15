import { AccessibilityRole, TouchableOpacity } from 'react-native';
import Icon from '../graphics/Icon';

interface IconButtonProps {
  iconXml: string;
  onPress: () => void;
  accessible: boolean;
  hint: string;
  label: string;
  role: AccessibilityRole;
  classNames?: string;
  iconClassNames?: string;
  activeOpacity?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  iconXml,
  onPress,
  accessible,
  hint,
  label,
  role,
  classNames,
  iconClassNames,
  activeOpacity,
}) => {
  return (
    <TouchableOpacity>
      <Icon xml={iconXml} />
    </TouchableOpacity>
  );
};

export default IconButton;
