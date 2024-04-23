import { styled } from 'nativewind';
import { Text, View, AccessibilityRole } from 'react-native';

import ReconnectKidItem from './ReconnectKidItem';
import { KidStatus, IconName } from '@/shared/types';

interface ReconnectKidProps {
  kids: Array<{
    kidName: string;
    status: KidStatus;
    iconType: IconName;
  }>;
  classNames?: string;
  accessibilityLabel: string;
  accessibilityHint: string;
  accessibilityRole: AccessibilityRole;
  onPress: () => void;
}

const Wrapper = styled(View);
const Title = styled(Text);

const ReconnectKidList: React.FC<ReconnectKidProps> = ({
  kids,
  classNames,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole,
}) => (
  <Wrapper className={`flex-column items-center ml-5 w-80 ${classNames}`}>
    <Title className="font-medium mb-6 text-xl text-black-primary">
      Оберіть дитину
    </Title>
    {kids.map((kid, index) => (
      <ReconnectKidItem
        key={index}
        {...kid}
        classNames={classNames}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessibilityRole={accessibilityRole}
      />
    ))}
  </Wrapper>
);

export default ReconnectKidList;
