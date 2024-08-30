import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from '../config/store';

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
      </PersistGate>
  </Provider>;
};

export default StoreProvider;
