import {
  Icon,
  PrimaryButton,
  PrimaryContainer,
  SecondaryTitle,
  errorIcon,
} from '@/shared/ui';
import { router } from 'expo-router';

const NotFound: React.FC = () => {
  return (
    <PrimaryContainer classNames="items-center">
      <Icon xml={errorIcon} />
      <SecondaryTitle>Сторінку не знайдено :(</SecondaryTitle>
      <PrimaryButton
        text="Повернутись назад"
        classNames="mt-6"
        onPress={() => router.back()}
      />
    </PrimaryContainer>
  );
};

export default NotFound;
