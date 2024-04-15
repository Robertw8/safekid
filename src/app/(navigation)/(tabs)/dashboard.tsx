import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const Dashboard: React.FC = () => {
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Dashboard page</Text>
      <Link href="/adult/login" style={{ marginTop: 20, color: 'green' }}>
        Login tut
      </Link>
    </View>
  );
};

export default Dashboard;
