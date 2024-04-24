import { BackButton, PrimaryContainer } from '@/shared/ui';
import { ReconnectKidList } from '@/widgets/adult';
import { KidStatus, IconName } from '@/shared/types';

const ReconnectKidScreen: React.FC = () => {
  const handlePress = () => {
    console.log('Handle kid selection');
  };

  const kids = [
    {
      kidName: 'Олівія',
      status: 'active' as KidStatus,
      iconType: 'chevron-thin-right' as IconName,
    },
    {
      kidName: 'Макс',
      status: 'error' as KidStatus,
      iconType: 'trash-outline' as IconName,
    },
    {
      kidName: 'Марта',
      status: 'inactive' as KidStatus,
      iconType: 'form' as IconName,
    },
  ];

  return (
    <PrimaryContainer>
      <BackButton />
      <ReconnectKidList
        kids={kids}
        onPress={handlePress}
        accessibilityRole={'button'}
        accessibilityLabel={"Оновити зв'язок"}
        accessibilityHint={"натисніть щоб оновити зв'язок з дитиною"}
      />
    </PrimaryContainer>
  );
};

export default ReconnectKidScreen;
