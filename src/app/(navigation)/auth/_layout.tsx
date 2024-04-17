import { Stack } from 'expo-router';

const AuthLayout: React.FC = () => {
  return (
    <Stack
      screenOptions={{
        animation: 'fade_from_bottom',
        headerShown: false,
        animationDuration: 250,
      }}
    />
  );
};

export default AuthLayout;
