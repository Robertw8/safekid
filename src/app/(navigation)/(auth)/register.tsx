import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const RegisterScreen: React.FC = () => {
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Register screen</Text>
      <Link href="/login" style={{ marginTop: 20, color: 'red' }}>
        Login tut
      </Link>
      <Link href="/welcome" style={{ marginTop: 20, color: 'yellow' }}>
        Welcome tut
      </Link>
      <Link href="/dashboard" style={{ marginTop: 20, color: 'green' }}>
        Dashboard tut
      </Link>
    </View>
  );
};

export default RegisterScreen;
