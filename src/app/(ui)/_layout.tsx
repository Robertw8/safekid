import { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { RootProvider } from '../providers/root-provider';

const StackLayout: React.FC = () => {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <RootProvider>
      <Stack
        screenOptions={{
          animation: 'fade_from_bottom',
          headerShown: false,
          animationDuration: 250,
        }}
      />
    </RootProvider>
  );
};

export default StackLayout;
export { ErrorBoundary } from 'expo-router';
