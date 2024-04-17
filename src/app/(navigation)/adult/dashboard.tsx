import { BackButton } from '@/shared/ui';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const AdultDashboard: React.FC = () => {
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BackButton />
      <Text>Dashboard page</Text>
      <Link href="/auth/adult/login" style={{ marginTop: 20, color: 'green' }}>
        Login tut
      </Link>
    </View>
  );
};

export default AdultDashboard;
