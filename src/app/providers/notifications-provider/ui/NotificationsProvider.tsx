import { useEffect } from 'react';
import { usePushNotifications } from '../model/usePushNotifications';

interface NotificationsProviderProps {
  children: React.ReactNode;
}

const NotificationsProvider: React.FC<NotificationsProviderProps> = ({
  children,
}) => {
  const { pushToken, notification } = usePushNotifications();

  const data = JSON.stringify(notification, undefined, 2);

  useEffect(() => {
    console.log('PUSH TOKEN -->', pushToken);
    console.log('DATA -->', data);
  }, []);

  return <>{children}</>;
};

export default NotificationsProvider;
