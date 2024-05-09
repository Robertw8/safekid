import { useEffect, useState } from 'react';
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { useAppDispatch, useListening } from '@/shared/lib';
import { sendRecording, setEnabled, setRecording } from '@/features/listening';
import { audioMode, audioSettings } from '../model/audioSettings';

interface ListeningProviderProps {
  children: React.ReactNode;
}

const ListeningProvider: React.FC<ListeningProviderProps> = ({ children }) => {
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [mediaPermission, requestMediaPermission] =
    MediaLibrary.usePermissions();
  const dispatch = useAppDispatch();
  //! const { enabled, isTriggerDetected } = useListening();

  useEffect(() => {
    //! if (enabled) startListening();
    const interval = setInterval(() => {
      startListening();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const startListening = async () => {
    try {
      if (mediaPermission?.status !== 'granted') {
        await requestMediaPermission();
      }

      if (permissionResponse?.status !== 'granted') {
        await requestPermission();
      }

      await Audio.setAudioModeAsync(audioMode);
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(audioSettings);
      await recording.startAsync();
      dispatch(setEnabled(true));
      console.log('recording started');

      //! const status = await recording.getStatusAsync();

      setTimeout(async () => {
        await stopListening(recording);

        const uri = recording.getURI();
        console.log(uri);
        //! const base64String = await FileSystem.readAsStringAsync(uri as string, {
        //!   encoding: FileSystem.EncodingType.Base64,
        //! });

        //! const speechResponse = await sendRecording(base64String);

        //! console.log(speechResponse);
      }, 1000);
    } catch (err) {
      console.log('Failed to start recording', err);
    }
  };

  const stopListening = async (recording: Audio.Recording) => {
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
  };

  return <>{children}</>;
};

export default ListeningProvider;
