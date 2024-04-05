import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { LogInForm } from '@/widgets/auth';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <LogInForm />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    // fontFamily: 'RobotoRegular',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#212121',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
