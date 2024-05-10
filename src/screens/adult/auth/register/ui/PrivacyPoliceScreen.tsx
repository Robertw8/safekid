import { ScrollView, View } from "react-native";
import { styled } from 'nativewind';
import { InstructionText, IntroductionText, PrimaryButton, TertiaryTitle } from "@/shared/ui";
import { router } from "expo-router";

const Wrapper = styled(View);
const ScrollWrapper = styled(ScrollView);

const PrivacyPoliceScreen: React.FC = () => {
    return (
        <Wrapper className="px-4 pt-20 pb-14 h-full bg-white flex items-center">
            <ScrollWrapper>
                <TertiaryTitle classNames="mb-4">
                    Умови та політика конфіденційності
                </TertiaryTitle>
                <IntroductionText classNames="mb-5">
                    При використанні додатку важливо попередити вашу дитину про такі моменти!
                </IntroductionText>
                <View >
                    <InstructionText classNames="mb-4">
                        Попередьте дитину про функціонування додатку та сигнал, який дитина почує, коли додаток розпізнає тригерну фразу та виявить потенційно небезпечну ситуацію. Поясніть, як потрібно себе поводити у таких ситуаціях та у потенційно небезпечних ситуаціях.
                    </InstructionText>
                    <InstructionText classNames="mb-4">
                        Наш додаток не стежить за дитиною, не зберігає та не записує її розмови та не має доступу до її спілкування. Він реагує лише на тригерні фрази, які застосунок дитини-користувача розпізнає, якщо з дитиною хтось спілкується. Сам додаток, при цьому, працює в активному режимі моніторінгу потенційних загроз.
                    </InstructionText>
                    <InstructionText classNames="mb-4">
                        Рекомендуємо перевірити процес роботи обох частин додатку на своєму пристрої. Щоб потренуватися промовте три умовні тригерні фрази: “жовто-полосата валізка”, “блакитний гвинтокрил”, “рожевий єдиноріг”, на які додаток буде реагувати. Так ви зрозумієте, як саме додаток реагує на небезпеку.
                    </InstructionText>
                </View>
                <PrimaryButton
                    text="Ознайомився"
                    onPress={() => router.back()}
                    hint="Підтвердження, що з умовами ознайомлений"
                    label="Ознайомився"
                    role="button"
                    classNames="w-48 self-center mt-auto"
                />
            </ScrollWrapper>
        </Wrapper>
    )
};

export default PrivacyPoliceScreen;
