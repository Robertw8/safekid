import { Redirect, SplashScreen, Stack } from 'expo-router';
import { RootProvider } from './providers/RootProvider';

// SplashScreen.preventAutoHideAsync(); // ! temp

const StackLayout: React.FC = () => {
  SplashScreen.hideAsync(); // ! temp

  return (
    <RootProvider>
      <Redirect href="/welcome" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </RootProvider>
  );
};

export default StackLayout;
export { ErrorBoundary } from 'expo-router';
