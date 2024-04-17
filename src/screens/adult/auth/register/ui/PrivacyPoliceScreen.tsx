import { Text, View } from "react-native";
import { styled } from 'nativewind';
import { PrimaryButton } from "@/shared/ui";
import { router } from "expo-router";

const Wrapper = styled(View);

const PrivacyPoliceScreen: React.FC = () => {
    return (
        <Wrapper className="px-4 pt-152px pb-13 h-full bg-white flex items-center">
            <Text>Privacy</Text>
            <PrimaryButton
        text="Ознайомився"
        onPress={() => router.back()}
        hint="Підтвердження, що з умовами ознайомлений"
        label="Ознайомився"
        role="button"
        classNames="w-48 self-center mt-auto"
      />
        </Wrapper>
    )
};

export default PrivacyPoliceScreen;
