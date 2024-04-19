import { styled } from 'nativewind';
import { View } from 'react-native';
import Icon from './Icon';

import moonIcon from './icons/moon-icon';
import micDisabledIcon from './icons/mic-disabled-icon';
import type { KidStatus } from '@/shared/types';

interface KidAvatarProps {
  statusTracking: boolean;
  status?: KidStatus;
  classNames?: string;
}

const Placeholder = styled(View); // !

const KidAvatar: React.FC<KidAvatarProps> = ({
  statusTracking,
  status,
  classNames,
}) => {
  const setStatus = () => {
    if (statusTracking) {
      switch (status) {
        case 'active':
          return {
            border: 'border-green',
            icon: null,
          };
        case 'inactive':
          return {
            border: 'border-gray-disabled',
            icon: (
              <Icon xml={moonIcon} classNames="absolute -bottom-1 -right-1" />
            ),
          };
        case 'error':
          return {
            border: 'border-red',
            icon: (
              <Icon
                xml={micDisabledIcon}
                classNames="absolute -bottom-1 -right-1"
              />
            ),
          };
      }
    }
  };

  return (
    <Placeholder
      className={`w-14 h-14 rounded-full relative bg-purple border-4 ${setStatus()?.border} ${classNames}`}
    >
      {setStatus()?.icon}
    </Placeholder>
  );
};

export default KidAvatar;
