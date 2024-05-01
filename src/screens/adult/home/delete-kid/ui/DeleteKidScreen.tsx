import { BackButton, PrimaryContainer, TertiaryTitle } from '@/shared/ui';
import { ActionKidList } from '@/widgets/adult';
import { KidStatus, IconName } from '@/shared/types';

const DeleteKidScreen: React.FC = () => {
  const handlePress = () => {
    console.log('Handle kid selection');
  };

  const kids = [
    {
      kidName: 'Олівія',
      status: 'active' as KidStatus,
      iconType: 'trash-outline' as IconName,
    },
    {
      kidName: 'Макс',
      status: 'error' as KidStatus,
      iconType: 'trash-outline' as IconName,
    },
    {
      kidName: 'Марта',
      status: 'inactive' as KidStatus,
      iconType: 'trash-outline' as IconName,
    },
  ];

  return (
    <PrimaryContainer classNames="justify-start">
      <BackButton />
      <TertiaryTitle classNames="mb-20 ml-16">
        Видалити акаунт дитини
      </TertiaryTitle>
      <ActionKidList
        kids={kids}
        onPress={handlePress}
        accessibilityRole={'button'}
        accessibilityLabel={'видалити зі списку'}
        accessibilityHint={'натисніть щоб видалити дитину зі списку'}
      />
    </PrimaryContainer>
  );
};

export default DeleteKidScreen;
