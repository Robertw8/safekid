import { BackButton, PrimaryContainer, TertiaryTitle } from '@/shared/ui';
import { ActionKidList } from '@/widgets/adult';
import { IconName } from '@/shared/types';

const ReconnectKidScreen: React.FC = () => {
  const handlePress = () => {
    console.log('Handle kid selection');
  };

  const kids = [
    {
      kidName: 'Олівія',
      iconType: 'chevron-thin-right' as IconName,
    },
    {
      kidName: 'Макс',
      iconType: 'chevron-thin-right' as IconName,
    },
    {
      kidName: 'Марта',
      iconType: 'chevron-thin-right' as IconName,
    },
  ];

  return (
    <PrimaryContainer classNames="justify-start pt-12">
      <BackButton />
      <TertiaryTitle classNames="mb-20 ml-12">
        Відновити зв'язок з існуючим акаунтом дитини
      </TertiaryTitle>
      <ActionKidList
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
