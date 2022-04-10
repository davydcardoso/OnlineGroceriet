import { Dimensions, TextStyle, ViewStyle } from 'react-native';
import { AppColors } from '../../constants/AppColors';
import { TextStyles } from '../../constants/TextStyles';

export const ContainerPage: ViewStyle = {
  flex: 1,
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
};

export const ContainerInputs: ViewStyle = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height / 4,
  paddingHorizontal: 20,
  marginTop: 80,
};

export const ContainerButtonSignIn: ViewStyle = {
  width: Dimensions.get('screen').width - 60,
  height: 60,
  backgroundColor: AppColors.primaryColor,
  marginTop: 120,
  marginVertical: 20,
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  borderRadius: 19,
};

export const TextButtonStyle: TextStyle = {
  fontFamily: TextStyles.defaultFont,
  fontSize: 20,
  fontWeight: 'bold',
  color: '#FFFFFF',
};

export const ContainerTextSignUp: ViewStyle = {
  flexDirection: 'row',
};
