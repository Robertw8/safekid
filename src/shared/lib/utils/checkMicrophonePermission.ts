import { Audio } from 'expo-av';

const checkMicrophonePermission = async () => {
  const permissionResponse = await Audio.getPermissionsAsync();

  return permissionResponse;
};

export default checkMicrophonePermission;
