import { messaging } from 'react-native-firebase';

const getDeviceToken = async () => {
  const token = await messaging().getToken();

  return token;
};

export default getDeviceToken;
