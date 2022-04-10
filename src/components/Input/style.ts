import { Dimensions, TextStyle, ViewStyle } from 'react-native';
import { AppColors } from '../../constants/AppColors';
import { TextStyles } from '../../constants/TextStyles';

export const ContainerInput: ViewStyle = {
  paddingLeft: 10,
  marginBottom: 20,
};

export const TitleInputStyle: TextStyle = {
  fontFamily: 'Roboto-Regular',
  fontSize: 16,
  color: '#000000',
};

export const InputStyle: TextStyle = {
  height: 60,
  width: Dimensions.get('screen').width - 60,
  borderStyle: 'solid',
  borderBottomWidth: 1,
  fontSize: 18,
  fontFamily: TextStyles.defaultFont,
  color: '#000000',
};
