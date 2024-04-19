import { styled } from 'nativewind';
import { View } from 'react-native';
import {
  KidAvatar,
  KidCardTitle,
  KidListeningStatus,
  Switch,
} from '@/shared/ui';
import type { KidStatus } from '@/shared/types';

interface HomeKidsItemProps {
  kidName: string;
  status: KidStatus;
}

const Item = styled(View);
const LeftColumn = styled(View);
const TextWrapper = styled(View);

const HomeKidsItem: React.FC<HomeKidsItemProps> = ({ kidName, status }) => {
  return (
    <Item className="flex-row items-center justify-between mt-7">
      <LeftColumn className="flex-row">
        <KidAvatar statusTracking={true} status={status} />
        <TextWrapper className="ml-4">
          <KidCardTitle>{kidName}</KidCardTitle>
          <KidListeningStatus status={status} />
        </TextWrapper>
      </LeftColumn>
      <Switch
        checked={false}
        onChange={() => console.log('Kid status changed')}
      />
    </Item>
  );
};

export default HomeKidsItem;
