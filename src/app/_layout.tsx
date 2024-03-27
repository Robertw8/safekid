import { Redirect, SplashScreen, Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const StackLayout: React.FC = () => {
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
