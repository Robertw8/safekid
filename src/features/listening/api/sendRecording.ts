import axios from 'axios';
import { Alert } from 'react-native';

const sendRecording = async (base64String: string, kidId: string) => {
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  try {
    const response = await axios.post(
      `https://drake-singular-severely.ngrok-free.app/child/speech/${kidId}`,
      base64String
    );

    return response.data;
  } catch (error) {
    Alert.alert('Сталась помилка під час прослуховування');
    console.error(error);
  }
};

export default sendRecording;
