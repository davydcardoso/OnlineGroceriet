import { Dimensions, ViewStyle } from 'react-native';
import { AppColors } from '../../constants/AppColors';

export const ContainerPage: ViewStyle = {
  flex: 1,
  width: Dimensions.get('screen').width,
  height: '100%',
  backgroundColor: AppColors.primaryColor,
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
};
