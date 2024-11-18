import { styled } from 'nativewind';
import { router } from 'expo-router';
import {
  InstructionText,
  TertiaryTitle,
  PrimaryButton,
  CheckField,
  NormalText,
} from '@/shared/ui';
import { ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const WrapperText = styled(ScrollView);

const InfoAfterRegistration: React.FC = () => {
  const [check, setCheck] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const isFirstLaunch = await AsyncStorage.getItem('hasShownInfo');
      if (isFirstLaunch) {
        router.back();
      }
    };
    checkFirstLaunch();
  }, []);

  const handlePress = async () => {
    if (!check) {
      setShowError(true);
    } else {
      setShowError(false);
      await AsyncStorage.setItem('hasShownInfo', 'true');
      router.back();
    }
  };

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
        <InstructionText classNames="mt-5">
          Рекомендуємо перевірити процес роботи обох частин додатку на своєму
          пристрої. Щоб потренуватися промовте три умовні тригерні фрази:
          “жовто-полосата валізка”, “блакитний гвинтокрил”, “рожевий єдиноріг”,
          на які додаток буде реагувати. Так ви зрозумієте, як саме додаток
          реагує на небезпеку.
        </InstructionText>

        <CheckField
          classNames={`ml-1 mt-6`}
          checked={check}
          onPress={() => {
            setCheck(!check);
            setShowError(false);
          }}
        >
          <NormalText
            classNames={`font-normal text-xs leading-normal ml-3 ${
              showError ? 'text-red' : 'text-black-100'
            }`}
          >
            Ознайомленний
          </NormalText>
        </CheckField>

        <PrimaryButton
          text="Перейти до додатку"
          onPress={handlePress}
          hint="Перейти до додатку"
          label="Перейти до додатку"
          role="button"
          classNames="w-48 self-center mt-auto mt-4 bg-gray-button"
          textClassNames="text-black-100"
        />
      </WrapperText>
    </>
  );
};

export default InfoAfterRegistration;
