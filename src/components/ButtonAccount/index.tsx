import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import {
  ContainerButtonList,
  ImageBackArrowButtonStyle,
  ImageStyleButton,
  TextButtonStyle,
} from './styles';

type ButtonProps = {
  image: any;
  hint: string;
  functionOnPress: () => void;
};

export const ButtonAccount: React.FC<ButtonProps> = ({
  hint,
  image,
  functionOnPress,
}) => {
  return (
    <TouchableOpacity style={ContainerButtonList} onPress={functionOnPress}>
      <Image style={ImageStyleButton} source={image} />
      <Text style={TextButtonStyle}>{hint}</Text>
      <Image
        style={ImageBackArrowButtonStyle}
        source={require('../../assets/BackArrowIcon.png')}
      />
    </TouchableOpacity>
  );
};
