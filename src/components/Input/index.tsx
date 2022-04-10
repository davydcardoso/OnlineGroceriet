import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import { ContainerInput, InputStyle, TitleInputStyle } from './style';

type Props = {
  control: Control<any>;
  name: string;
  hint: string;
  isPassword?: boolean;
};

export const Input: React.FC<Props> = ({
  control,
  name,
  hint,
  isPassword = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <View style={ContainerInput}>
          <Text style={TitleInputStyle}>{hint}</Text>
          <TextInput
            onChangeText={onChange}
            value={value}
            style={InputStyle}
            secureTextEntry={isPassword}
          />
        </View>
      )}
    />
  );
};
