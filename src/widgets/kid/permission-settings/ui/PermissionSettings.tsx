import { Icon, NormalText, PrimaryButton, SecondaryTitle } from '@/shared/ui';
import partialPermissionIcon from './icons/partial-permission-icon';
import noPermissionIcon from './icons/no-permission-icon';
import { Audio } from 'expo-av';

interface PermissionSettingsProps {
  permission?: boolean; // ! string "x" | "y"
}

const PermissionSettings: React.FC<PermissionSettingsProps> = ({
  permission,
}) => {
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  const handleSettingsClick = async () => {
    await requestPermission();
    console.log(permissionResponse);
  };

  return (
    <>
      <Icon xml={permission ? partialPermissionIcon : noPermissionIcon} />
      <SecondaryTitle classNames="text-center mt-8">
        {permission
          ? 'Моніторинг може працювати не завжди!'
          : 'Додаток не працює!'}
      </SecondaryTitle>
      <NormalText classNames="text-center mt-2 text-black-primary">
        Надайте постійний доступ до мікрофону!
      </NormalText>
      <PrimaryButton
        text="Налаштувати"
        classNames="inline-block mt-12 w-52 mx-auto"
        onPress={handleSettingsClick}
      />
    </>
  );
};

export default PermissionSettings;
