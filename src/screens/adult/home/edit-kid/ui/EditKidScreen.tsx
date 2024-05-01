import { BackButton, PrimaryContainer, TertiaryTitle } from '@/shared/ui';
import { ActionKidList } from '@/widgets/adult';
import { KidStatus, IconName } from '@/shared/types';

const EditKidScreen: React.FC = () => {
  const handlePress = () => {
    console.log('Handle kid selection');
  };

  const kids = [
    {
      kidName: 'Олівія',
      status: 'active' as KidStatus,
      iconType: 'form' as IconName,
    },
    {
      kidName: 'Макс',
      status: 'error' as KidStatus,
      iconType: 'form' as IconName,
    },
    {
      kidName: 'Марта',
      status: 'inactive' as KidStatus,
      iconType: 'form' as IconName,
    },
  ];

  return (
    <PrimaryContainer classNames="justify-start">
      <BackButton />
      <TertiaryTitle classNames="mb-20 ml-16">
        Редагувати дані дитини
      </TertiaryTitle>
      <ActionKidList
        kids={kids}
        onPress={handlePress}
        accessibilityRole={'button'}
        accessibilityLabel={'редагувати данні дитини'}
        accessibilityHint={'натисніть щоб відредагувати данні дитини'}
      />
    </PrimaryContainer>
  );
};

export default EditKidScreen;
