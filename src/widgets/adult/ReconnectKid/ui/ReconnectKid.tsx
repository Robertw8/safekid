import { styled } from 'nativewind';
import { Text, View, AccessibilityRole } from 'react-native';

import { ReconnectKidItem } from '@/widgets/adult';
import { KidStatus, IconName } from '@/shared/types';

interface ReconnectKidProps {
  kidName?: string;
  status?: KidStatus;
  iconName?: IconName;
  classNames?: string;
  onPress: () => void;
  accessibilityLabel: string;
  accessibilityHint: string;
  accessibilityRole: AccessibilityRole;
}

const Wrapper = styled(View);
const Title = styled(Text);

const ReconnectKid: React.FC<ReconnectKidProps> = ({
  kidName,
  classNames,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole,
  status = 'inactive',
  iconName = 'new-message',
}) => {
  return (
    <Wrapper className={`flex-column items-center ml-5 w-80 ${classNames}`}>
      <Title className="font-medium mb-6 text-xl text-black-primary">
        Оберіть дитину
      </Title>
      <ReconnectKidItem
        status={status}
        kidName={kidName}
        iconType={iconName}
        classNames={classNames}
        accessibilityHint={accessibilityHint}
        accessibilityRole={accessibilityRole}
        accessibilityLabel={accessibilityLabel}
      />
    </Wrapper>
  );
};

export default ReconnectKid;
