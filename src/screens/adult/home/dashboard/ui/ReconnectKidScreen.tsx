import { BackButton, PrimaryContainer } from '@/shared/ui';
import { ReconnectKid } from '@/widgets/adult';

const ReconnectKidScreen: React.FC = () => {
  const handlePress = () => {
    console.log('Handle kid selection');
  };

  return (
    <PrimaryContainer>
      <BackButton />
      <ReconnectKid
        status="active"
        kidName="Katarina"
        onPress={handlePress}
        iconName="chevron-thin-right"
        accessibilityRole={'button'}
        accessibilityLabel={"Оновити зв'язок"}
        accessibilityHint={"натисніть щоб оновити зв'язок з дитиною"}
      />
    </PrimaryContainer>
  );
};

export default ReconnectKidScreen;
