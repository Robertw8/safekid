import { styled } from 'nativewind';
import { View, AccessibilityRole } from 'react-native';

import ActionKidItem from './ActionKidItem';

import { KidStatus, IconName } from '@/shared/types';
import { TertiaryTitle } from '@/shared/ui';

interface ActionKidProps {
  kids: Array<{
    kidName: string;
    status?: KidStatus;
    iconType: IconName;
  }>;
  classNames?: string;
  accessibilityLabel: string;
  accessibilityHint: string;
  accessibilityRole: AccessibilityRole;
  onPress: () => void;
}

const Wrapper = styled(View);

const ActionKidList: React.FC<ActionKidProps> = ({
  kids,
  classNames,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole,
}) => (
  <Wrapper className={`flex-column items-center ml-5 w-80 ${classNames}`}>
    <TertiaryTitle classNames="mb-8">Оберіть дитину</TertiaryTitle>
    {kids.map((kid, index) => (
      <ActionKidItem
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

export default ActionKidList;
