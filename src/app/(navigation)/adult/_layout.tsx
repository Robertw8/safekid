import { selectAuthenticated } from '@/processes/auth/model/selectors';
import { WelcomeScreen } from '@/screens/shared';
import { useAppSelector } from '@/shared/lib';
import { BottomNavigation } from '@/widgets/adult';
import { Stack } from 'expo-router';

const AdultLayout: React.FC = () => {
  const isAuth = useAppSelector(selectAuthenticated);

  return isAuth ? (
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
  ) : (
    <WelcomeScreen />
  );
};

export default AdultLayout;
