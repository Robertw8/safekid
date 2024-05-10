import { Audio } from 'expo-av';
import { Vibration } from 'react-native';

const playSound = async (): Promise<void> => {
  const sound = new Audio.Sound();

  await sound.loadAsync(require('./audio/alarm.mp3'));
  Vibration.vibrate([0, 250, 250, 250]);
  await sound.playAsync();

  setTimeout(() => {
    Vibration.cancel();
    sound.unloadAsync();
  }, 10000);
};

export default playSound;
