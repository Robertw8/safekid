import { styled } from 'nativewind';
import { View, AccessibilityRole } from 'react-native';

import { KidStatus, IconName } from '@/shared/types';
import {
  ActionButton,
  KidAvatar,
  KidCardTitle,
  KidListeningStatus,
} from '@/shared/ui';

interface ActionKidItemProps {
  kidName: string;
  status?: KidStatus;
  iconType: IconName;
  classNames?: string;
  accessibilityLabel: string;
  accessibilityHint: string;
  accessibilityRole: AccessibilityRole;
}

const AvatarContainer = styled(View);
const Item = styled(View);

const shadowStyle = {
  shadowColor: 'rgba(0, 0, 0, 0.9)',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 5,
  backgroundColor: '#fff',
};

const ActionKidItem: React.FC<ActionKidItemProps> = ({
  kidName,
  iconType,
  classNames,
  status,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole,
}) => {
  return (
    <Item
      style={shadowStyle}
      className={`mt-4 rounded-2xl px-4 py-4 flex-row items-center justify-between w-full h-20 ${classNames}`}
    >
      <AvatarContainer className={` flex-row items-center ${classNames}`}>
        <KidAvatar statusTracking={true} status={status} />
        <View>
          <KidCardTitle classNames="ml-4">{kidName}</KidCardTitle>
          <KidListeningStatus classNames="ml-4" status={status} />
        </View>
      </AvatarContainer>
      <ActionButton
        iconName={iconType}
        accessibilityHint={accessibilityHint}
        accessibilityRole={accessibilityRole}
        accessibilityLabel={accessibilityLabel}
      />
    </Item>
  );
};

export default ActionKidItem;
