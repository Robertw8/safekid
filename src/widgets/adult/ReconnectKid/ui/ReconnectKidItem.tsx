import { styled } from 'nativewind';
import { Text, View } from 'react-native';

import { ActionButton, KidAvatar } from '@/shared/ui';
import { KidStatus, IconName } from '@/shared/types';

interface ReconnectKidItemProps {
  kidName?: string;
  iconType: IconName;
  classNames?: string;
  status: KidStatus;
}

const Item = styled(View);
const AvatarContainer = styled(View);
const Name = styled(Text);

const ReconnectKidItem: React.FC<ReconnectKidItemProps> = ({
  kidName,
  iconType,
  classNames,
  status,
}) => {
  return (
    <Item
      className={`shadow-lg border border-black-20 rounded-2xl px-4 py-4 flex-row items-center justify-between w-full h-20 ${classNames}`}
    >
      <AvatarContainer className={` flex-row items-center ${classNames}`}>
        <KidAvatar statusTracking={true} status={status} />
        <Name
          className={`ml-4 text-lg font-semibold text-dark-blue ${classNames}`}
        >
          {kidName || 'Child'}
        </Name>
      </AvatarContainer>
      <ActionButton iconName={iconType} />
    </Item>
  );
};

export default ReconnectKidItem;
