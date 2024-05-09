import AsyncStorage from '@react-native-async-storage/async-storage';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['jwtToken'],
};

export default authPersistConfig;
