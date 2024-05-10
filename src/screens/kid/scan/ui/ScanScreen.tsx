import { useState } from 'react';
import { router } from 'expo-router';
import axios from 'axios';
import { Camera } from '@/widgets/kid';

const ScanScreen: React.FC = () => {
  const [scanned, setScanned] = useState<boolean>(false);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    console.log(data);
    router.navigate('/kid/add-kid');

    axios.defaults.headers.common['Content-Type'] = 'application/json';
    await axios.post(
      'https://drake-singular-severely.ngrok-free.app/child/registration',
      data
    );
  };

  return (
    <Camera scanned={scanned} handleBarCodeScanned={handleBarCodeScanned} />
  );
};

export default ScanScreen;
