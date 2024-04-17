import { Camera } from 'expo-camera';

const checkCameraPermission = async () => {
  const permissionResponse = await Camera.getCameraPermissionsAsync();

  return permissionResponse;
};

export default checkCameraPermission;
