import React from 'react';
import { CheckField, HyperText, NormalText } from '@/shared/ui';
import { styled } from 'nativewind';
import { Link } from 'expo-router';
import { View } from '@ant-design/react-native';

interface PrivacyPolicyCheckProps {
  checked: boolean;
  onToggle: () => void;
}

const StyledView = styled(View);

const PrivacyPolicyCheck: React.FC<PrivacyPolicyCheckProps> = ({
  checked,
  onToggle,
}) => {
  return (
    <StyledView className="mt-2">
      <CheckField checked={checked} onPress={onToggle}>
        <NormalText classNames={`font-normal text-xs leading-normal pl-2 pr-1`}>
          Згоден з
        </NormalText>
        <Link href="/auth/adult/privacy-police">
          <HyperText classNames="font-normal text-xs leading-normal">
            умовами та політикою конфіденційності
          </HyperText>
        </Link>
      </CheckField>
    </StyledView>
  );
};

export default PrivacyPolicyCheck;
