import { styled } from 'nativewind';
import { Text, View } from 'react-native';

import { ReconnectKidItem } from '@/widgets/adult';
import { KidStatus, IconName } from '@/shared/types';

interface ReconnectKidProps {
  iconName?: IconName;
  kidName?: string;
  classNames?: string;
  status?: KidStatus;
  onPress: () => void;
}

const Wrapper = styled(View);
const Title = styled(Text);

const ReconnectKid: React.FC<ReconnectKidProps> = ({
  kidName,
  iconName = 'new-message',
  classNames,
  status = 'inactive',
}) => {
  return (
    <Wrapper className={`flex-column items-center ml-5 w-80 ${classNames}`}>
      <Title className="font-medium mb-6 text-xl text-black-primary">
        Оберіть дитину
      </Title>
      <ReconnectKidItem
        kidName={kidName}
        iconType={iconName}
        classNames={classNames}
        status={status}
      />
    </Wrapper>
  );
};

export default ReconnectKid;
