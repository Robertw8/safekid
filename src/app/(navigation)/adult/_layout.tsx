import { selectJwtToken } from '@/processes/auth/model/selectors';
import { LoginScreen } from '@/screens/adult';
import { useAppSelector } from '@/shared/lib';
import { BottomNavigation } from '@/widgets/adult';
import { Stack } from 'expo-router';

const AdultLayout: React.FC = () => {
  const isJwtToken = useAppSelector(selectJwtToken);

  return isJwtToken ? (
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
    <LoginScreen />
  );
};

export default AdultLayout;
