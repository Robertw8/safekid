import { useEffect } from 'react';
import { Redirect, SplashScreen, Stack } from 'expo-router';
import { RootProvider } from './providers/RootProvider';
// -------------------------- START
import messaging from '@react-native-firebase/messaging';
import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';
import { addEventListener } from '@react-native-community/netinfo';
import { Alert, DevSettings } from 'react-native';
// -------------------------- END

// SplashScreen.preventAutoHideAsync(); // ! temp

const StackLayout: React.FC = () => {
  // -------------------------- START
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  useEffect(() => {
    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then(token => console.log(token));
    }
  }, []);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  const handleNotificationClick = async response => {
    const screen = response?.notification?.request?.content?.data?.screen;
    if (screen !== null) {
      router.navigate(screen);
    }
  };

  useEffect(() => {
    const notificationClickSubscription =
      Notifications.addNotificationResponseReceivedListener(
        handleNotificationClick
      );

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
        router
      );

      // console.log(
      //   'Notification caused app to open from background state:',
      //   remoteMessage.data.screen,
      //   router
      // );

      // if (remoteMessage?.data?.screen) {
      //   router.navigate(`${remoteMessage.data.screen}`);
      // }
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification
          );
          if (remoteMessage?.data?.screen) {
            router.navigate(`${remoteMessage.data.screen}`);
          }
        }
      });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);

      const notification = {
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        data: remoteMessage.data, // optional data payload
      };
      console.log('notification', notification);

      // Schedule the notification with a null trigger to show immediately
      await Notifications.scheduleNotificationAsync({
        content: remoteMessage,
        // content: notification,
        trigger: null,
      });
    });

    // Handle push notifications when the app is in the foreground
    const handlePushNotification = async remoteMessage => {
      const notification = {
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        data: remoteMessage.data, // optional data payload
      };

      await Notifications.scheduleNotificationAsync({
        content: notification,
        trigger: null,
      });
    };

    const unsubscribe = messaging().onMessage(handlePushNotification);

    // Clean up the event listeners
    return () => {
      unsubscribe();
      notificationClickSubscription.remove();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      if (!state.isConnected) {
        Alert.alert('Internet Check', 'Please check your connection', [
          {
            text: 'Okay',
            onPress: () => DevSettings.reload(),
          },
        ]);
      }
    });

    // Unsubscribe
    unsubscribe();
  });

  // ----------------------------------------------- END

  useEffect(() => {
    SplashScreen.hideAsync(); // ! temp
  }, []);

  return (
    <RootProvider>
      <Redirect href="/auth/welcome" />
      <Stack
        screenOptions={{
          animation: 'fade_from_bottom',
          headerShown: false,
          animationDuration: 250,
        }}
      />
    </RootProvider>
  );
};

export default StackLayout;
export { ErrorBoundary } from 'expo-router';
