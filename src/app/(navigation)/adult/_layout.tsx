import { BottomNavigation } from '@/widgets/adult';
import { Stack } from 'expo-router';

const AdultLayout: React.FC = () => {
  return (
    <>
      <Stack
        screenOptions={{
          animation: 'fade_from_bottom',
          headerShown: false,
          animationDuration: 250,
        }}
      />
      <BottomNavigation />
    </>
  );
};

export default AdultLayout;
