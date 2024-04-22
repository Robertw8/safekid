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
        iconName="chevron-thin-right"
        kidName="Katarina"
        status="active"
        onPress={handlePress}
      />
    </PrimaryContainer>
  );
};

export default ReconnectKidScreen;
