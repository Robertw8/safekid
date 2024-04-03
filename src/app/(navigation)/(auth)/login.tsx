import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const LoginScreen: React.FC = () => {
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Login screen</Text>
      <Link href="/dashboard" style={{ marginTop: 20, color: 'red' }}>
        Dashboard tut
      </Link>
      <Link href="/register" style={{ marginTop: 20, color: 'yellow' }}>
        Register tut
      </Link>
      <Link href="/welcome" style={{ marginTop: 20, color: 'green' }}>
        Welcome tut
      </Link>
    </View>
  );
};

export default LoginScreen;
