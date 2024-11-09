import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Controller } from 'react-hook-form';
import {
  LabelInput,
  PrimaryInput,
  openEyeIcon,
  closedEyeIcon,
  Icon,
} from '@/shared/ui';
import { KeyboardTypeOptions } from 'react-native';
import { styled } from 'nativewind';

const TouchableOpacityStyled = styled(TouchableOpacity);
const ViewStyled = styled(View);

interface InputFieldProps {
  control: any;
  name: string;
  label: string;
  errors: any;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  isPassword?: boolean;
}

export const InputField = ({
  control,
  name,
  label,
  errors,
  placeholder,
  keyboardType = 'default',
  isPassword = false,
}: InputFieldProps) => {
  const [isSecure, setIsSecure] = React.useState(isPassword);

  return (
    <ViewStyled className="mb-4">
      <LabelInput classNames="text-base mb-2">{label}</LabelInput>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View>
            <PrimaryInput
              value={value}
              placeholder={placeholder}
              onChangeText={onChange}
              secureTextEntry={isSecure}
              keyboardType={keyboardType}
              classNames={`text-base ${error && 'border border-rose-600 text-red'}`}
            />
            {isPassword && (
              <TouchableOpacityStyled
                className="absolute bottom-3.5 right-3.5"
                onPress={() => setIsSecure(!isSecure)}
              >
                <Icon xml={isSecure ? closedEyeIcon : openEyeIcon} />
              </TouchableOpacityStyled>
            )}
          </View>
        )}
        name={name}
      />
      {errors[name] && (
        <LabelInput classNames="text-red">{errors[name].message}</LabelInput>
      )}
    </ViewStyled>
  );
};
