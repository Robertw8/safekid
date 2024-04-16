import { Redirect, SplashScreen, Stack } from 'expo-router';
import { StoreProvider } from './providers/StoreProvider';

// SplashScreen.preventAutoHideAsync(); // ! temp

const StackLayout: React.FC = () => {
  SplashScreen.hideAsync(); // ! temp

  return (
    <StoreProvider>
      <Redirect href="/welcome" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </StoreProvider>
  );
};

export default StackLayout;
export { ErrorBoundary } from 'expo-router';
