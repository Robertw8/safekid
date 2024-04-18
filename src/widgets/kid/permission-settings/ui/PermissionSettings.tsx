import { Icon, NormalText, PrimaryButton, SecondaryTitle } from '@/shared/ui';
import noPermissionIcon from './icons/no-permission-icon';
import { Audio } from 'expo-av';

const PermissionSettings: React.FC = () => {
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  const handleSettingsClick = async () => {
    await requestPermission();
    console.log(permissionResponse);
  };

  return (
    <>
      <Icon xml={noPermissionIcon} />
      <SecondaryTitle classNames="text-center mt-8">
        Додаток не працює!
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
