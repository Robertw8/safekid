import { AuthProvider } from '../../AuthProvider';
import { StoreProvider } from '../../StoreProvider';

interface RootProviderProps {
  children: React.ReactNode;
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return (
    <StoreProvider>
      <AuthProvider>{children}</AuthProvider>
    </StoreProvider>
  );
};

export default RootProvider;
