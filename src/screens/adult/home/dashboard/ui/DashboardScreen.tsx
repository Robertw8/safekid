import { selectJwtToken } from '@/processes/auth/model/selectors';
import { getDeviceToken } from '@/shared/api';
import { useAppSelector } from '@/shared/lib';
import { BackButton, PrimaryContainer } from '@/shared/ui';
import { AddKidButton, HomeKidsList } from '@/widgets/adult';
import axios from 'axios';
import { useEffect } from 'react';

const DashboardScreen: React.FC = () => {
  const token = useAppSelector(selectJwtToken);
  const deviceToken = getDeviceToken();

  useEffect(() => {
    (async () => {
      axios.defaults.headers.common.Authorization = token;

      const res = await axios.get(
        'https://drake-singular-severely.ngrok-free.app/parent/my-children'
      );
      console.log('MY CHILDREN -->', res.data);
      console.log('Device token-->', deviceToken);
    })();
  }, []);

  return (
    <PrimaryContainer>
      <HomeKidsList />
      <BackButton />
      <AddKidButton />
    </PrimaryContainer>
  );
};

export default DashboardScreen;
