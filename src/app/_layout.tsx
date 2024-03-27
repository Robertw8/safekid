import { Redirect, SplashScreen, Stack } from 'expo-router';

// SplashScreen.preventAutoHideAsync(); // ! temp

const StackLayout: React.FC = () => {
  SplashScreen.hideAsync(); // ! temp

  return (
    <>
      <Redirect href="/welcome" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default StackLayout;
export { ErrorBoundary } from 'expo-router';
