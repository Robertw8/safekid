import { AuthProvider } from '../../AuthProvider';
import { ListeningProvider } from '../../ListeningProvider';
import { NotificationsProvider } from '../../NotificationsProvider';
import { StoreProvider } from '../../StoreProvider';

interface RootProviderProps {
  children: React.ReactNode;
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return (
    <StoreProvider>
      <ListeningProvider>
        <NotificationsProvider>
          <AuthProvider>{children}</AuthProvider>
        </NotificationsProvider>
      </ListeningProvider>
    </StoreProvider>
  );
};

export default RootProvider;
