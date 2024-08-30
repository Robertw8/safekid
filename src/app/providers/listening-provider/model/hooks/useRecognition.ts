import { useEffect, useState } from 'react';
import { audioMode, audioSettings } from '../../config/audioSettings';

import { Audio } from 'expo-av';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { sendRecording } from '@/features/listening';

const useRecognition = (): boolean => {
  const [audioPermission, requestAudioPermission] = Audio.usePermissions();
  const [mediaPermission, requestMediaPermission] =
    MediaLibrary.usePermissions();
  const [triggerDetected, setTriggerDetected] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      startListening();
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const startListening = async () => {
    try {
      if (audioPermission?.status !== 'granted') {
        await requestAudioPermission();
      }

      if (mediaPermission?.status !== 'granted') {
        await requestMediaPermission();
      }

      await Audio.setAudioModeAsync(audioMode);
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(audioSettings);
      await recording.startAsync();
      console.log('recording started');

      setTimeout(async () => {
        await stopListening(recording);

        const uri = recording.getURI();
        const base64String = await FileSystem.readAsStringAsync(uri as string, {
          encoding: FileSystem.EncodingType.Base64,
        });

        const response = await sendRecording(base64String, 'testdevicetoken2');

        setTriggerDetected(response);
        console.log(response);
      }, 3000);
    } catch (err) {}
  };

  return triggerDetected;
};

const stopListening = async (recording: Audio.Recording) => {
  await recording.stopAndUnloadAsync();
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
  });
};

export default useRecognition;
