import { styled } from 'nativewind';
import {
  InstructionText,
  TertiaryTitle,
  PrimaryButton,
  CheckField,
  NormalText,
} from '@/shared/ui';
import { ScrollView } from 'react-native';
import { router } from 'expo-router';

const WrapperText = styled(ScrollView);
interface CheckProps {
  checked: boolean;
  onToggle: () => void;
}

const InfoAfterRegistration: React.FC<CheckProps> = ({ checked, onToggle }) => {
  return (
    <>
      <WrapperText className="mt-6">
        <TertiaryTitle
          children="Реєстрація успішна, вітаємо!"
          classNames="text-center"
        />
        <InstructionText classNames="mt-5 text-center">
          При використанні додатку важливо попередити вашу дитину про такі
          моменти!
        </InstructionText>
        <InstructionText classNames="mt-5">
          Попередьте дитину про функціонування додатку та сигнал, який дитина
          почує, коли додаток розпізнає тригерну фразу та виявить потенційно
          небезпечну ситуацію. Поясніть, як потрібно себе поводити у таких
          ситуаціях та у потенційно небезпечних ситуаціях.
        </InstructionText>
        <InstructionText classNames="mt-5">
          Наш додаток не стежить за дитиною, не зберігає та не записує її
          розмови та не має доступу до її спілкування. Він реагує лише на
          тригерні фрази, які застосунок дитини-користувача розпізнає, якщо з
          дитиною хтось спілкується. Сам додаток, при цьому, працює в активному
          режимі моніторінгу потенційних загроз.
        </InstructionText>
        <InstructionText classNames="mt-5 mb-5">
          Рекомендуємо перевірити процес роботи обох частин додатку на своєму
          пристрої. Щоб потренуватися промовте три умовні тригерні фрази:
          “жовто-полосата валізка”, “блакитний гвинтокрил”, “рожевий єдиноріг”,
          на які додаток буде реагувати. Так ви зрозумієте, як саме додаток
          реагує на небезпеку.
        </InstructionText>
        <CheckField checked={checked} onPress={onToggle}>
          <NormalText
            classNames={`font-normal text-xs leading-normal pl-2 pr-1`}
          >
            Ознайомлений
          </NormalText>
        </CheckField>
        <PrimaryButton
          text="Перейти до додатку"
          onPress={() => router.back()}
          hint="Перейти до додатку"
          label="Перейти до додатку"
          role="button"
          classNames="w-48 self-center mx-auto mt-20"
        />
      </WrapperText>
    </>
  );
};

export default InfoAfterRegistration;
