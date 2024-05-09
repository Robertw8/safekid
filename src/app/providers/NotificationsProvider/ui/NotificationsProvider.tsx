
interface NotificationsProviderProps {
  children: React.ReactNode;
}

const NotificationsProvider: React.FC<NotificationsProviderProps> = ({
  children,
}) => {
  return <>{children}</>;
};

export default NotificationsProvider;
