import { styled } from 'nativewind';
import {
  ActivityIndicator,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { LogInForm } from '@/widgets/auth';
import { Link } from 'expo-router';
import {
  BackButton,
  chatIcon,
  HyperText,
  Icon,
  NormalText,
  PrimaryTitle,
} from '@/shared/ui';
import { useAppSelector } from '@/shared/lib';
import { selectIsLoading } from '@/processes/auth/model/selectors';

const Wrapper = styled(View);
const ScrollWrapper = styled(ScrollView);
const TextWrapper = styled(View);

const LoginScreen: React.FC = () => {
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollWrapper className="bg-white">
        {isLoading ? (
          <Wrapper className="h-screen justify-center">
            <ActivityIndicator size={100} color="#3D33E2" />
          </Wrapper>
        ) : (
          <Wrapper className="px-4 pt-40">
            <BackButton />
            <Icon xml={chatIcon} classNames={`absolute top-16 right-6`} />
            <PrimaryTitle classNames="mb-8 text-center">Вхід</PrimaryTitle>
            <LogInForm />
            <TextWrapper className="flex flex-row justify-center">
              <NormalText classNames="mr-1">Не маєте акаунту?</NormalText>
              <Link href="/auth/adult/register">
                <HyperText>Створити</HyperText>
              </Link>
            </TextWrapper>
          </Wrapper>
        )}
      </ScrollWrapper>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
