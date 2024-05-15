// import useRecognition from '../model/hooks/useRecognition';

interface ListeningProviderProps {
  children: React.ReactNode;
}

const ListeningProvider: React.FC<ListeningProviderProps> = ({ children }) => {
  // const triggerDetected = useRecognition();

  return <>{children}</>;
};

export default ListeningProvider;
