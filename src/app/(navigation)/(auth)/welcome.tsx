import { WelcomeScreen } from '@/screens/auth';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { View } from 'react-native';

const Wrapper = styled(View);

const Welcome: React.FC = () => {
  return (
    <Wrapper className="px-4 h-full flex justify-center items-center">
      <WelcomeScreen />
      <Link href="/dashboard" style={{ marginTop: 20, color: 'green' }}>
        Dashboard
      </Link>
    </Wrapper>
  );
};

export default Welcome;
