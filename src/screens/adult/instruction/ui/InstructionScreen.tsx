import { View } from "react-native";
import { styled } from 'nativewind';
import { CheckField, InstructionText, IntroductionText, PrimaryButton, TertiaryTitle } from "@/shared/ui";
import { router } from "expo-router";
import { useState } from "react";

const Wrapper = styled(View);
const WrapperText = styled(View);

const InstructionScreen: React.FC = () => {
    const [check, setCheck] = useState(false);

    const onClick = () => {
        if (check) {
            router.navigate('/adult/dashboard' as `${string}:${string}`);
            return;
        }
        alert('Підтвердіть ознайомлення з інструкцією');
    };

    return (
        <Wrapper className="px-4 pt-20 pb-14 h-full bg-white flex items-center">
            <TertiaryTitle classNames="mb-4">
                Реєстрація успішна, вітаємо!
            </TertiaryTitle>
            <IntroductionText classNames="mb-5">
                При використанні додатку важливо попередити вашу дитину про такі моменти!
            </IntroductionText>
            <WrapperText className="mb-7">
            <InstructionText classNames="mb-4">
                    Попередьте дитину про функціонування додатку та сигнал, який дитина почує, коли додаток розпізнає тригерну фразу та виявить потенційно небезпечну ситуацію. Поясніть, як потрібно себе поводити у таких ситуаціях та у потенційно небезпечних ситуаціях.
                </InstructionText>
            <InstructionText classNames="mb-4">
                    Наш додаток не стежить за дитиною, не зберігає та не записує її розмови та не має доступу до її спілкування. Він реагує лише на тригерні фрази, які застосунок дитини-користувача розпізнає, якщо з дитиною хтось спілкується. Сам додаток, при цьому, працює в активному режимі моніторінгу потенційних загроз.
</InstructionText>
                    <InstructionText classNames="mb-4">
                    Рекомендуємо перевірити процес роботи обох частин додатку на своєму пристрої. Щоб потренуватися промовте три умовні тригерні фрази: “жовто-полосата валізка”, “блакитний гвинтокрил”, “рожевий єдиноріг”, на які додаток буде реагувати. Так ви зрозумієте, як саме додаток реагує на небезпеку.
</InstructionText>
            </WrapperText>
            <CheckField checked={check} onPress={() => setCheck(!check)} classNames="self-start">
                <InstructionText classNames={` mb-0 ${check ? 'text-black-100' : 'text-red'}`}>Ознайомлений</InstructionText>
            </CheckField>
            <PrimaryButton
                text="Перейти до додатку"
                onPress={onClick}
                hint="Перехід до додатку"
                label="Перейти до додатку"
                role="button"
                classNames="w-48 self-center mt-auto"
            />
        </Wrapper>
    )
};

export default InstructionScreen;
