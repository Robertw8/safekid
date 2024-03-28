// import { LogInForm } from '@/widgets/LogInForm';
// import { Link } from 'expo-router';
// import { View, Text } from 'react-native';
import { LoginScreen } from '@/screens/LoginScreen';


const LoginPage: React.FC = () => {
  return (
    <LoginScreen />
    // <View
    //   style={{
    //     height: '100%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
    // >
    //   <Text>Login screen</Text>
    //   <LogInForm />
    //   <Link href="/dashboard" style={{ marginTop: 20, color: 'red' }}>
    //     Dashboard tut
    //   </Link>
    //   <Link href="/register" style={{ marginTop: 20, color: 'yellow' }}>
    //     Register tut
    //   </Link>
    //   <Link href="/welcome" style={{ marginTop: 20, color: 'green' }}>
    //     Welcome tut
    //   </Link>
    // </View>
  );
};

export default LoginPage;
