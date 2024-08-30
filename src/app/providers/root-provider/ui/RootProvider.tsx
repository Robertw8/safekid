import { AuthProvider } from '../../auth-provider';
import { ListeningProvider } from '../../listening-provider';
import { NotificationsProvider } from '../../notifications-provider';
import { StoreProvider } from '../../store-provider';

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
