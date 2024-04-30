import * as Notifications from 'expo-notifications';

const getDeviceToken = async () => {
  const token = await Notifications.getDevicePushTokenAsync();

  return token.data;
};

export default getDeviceToken;
