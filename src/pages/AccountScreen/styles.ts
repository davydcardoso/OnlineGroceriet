import { Dimensions, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { AppColors } from '../../constants/AppColors';

export const ContainerSafeAreaAccount: ViewStyle = {
  flex: 1,
};

export const ContainerAccount: ViewStyle = {
  flex: 1,
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const ContainerAccountHeader: ViewStyle = {
  flexDirection: 'row',
  width: Dimensions.get('window').width,
  height: '19%',
  borderBottomWidth: 0.5,
  alignItems: 'center',
  paddingHorizontal: 40,
};

export const ContainerAvatar: ViewStyle = {};

export const ContainerTextHeader: ViewStyle = {
  width: 270,
  height: 65,
  marginLeft: 15,
};

export const ContainerScrollBody: ViewStyle = {
  width: Dimensions.get('window').width,
  paddingTop: 16,
};

export const ContainerBodyButtons: ViewStyle = {
  width: Dimensions.get('window').width,
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: 20,
};

export const ContainerFloatActionButton: ViewStyle = {
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  bottom: 20,
  right: 30,
  width: 60,
  height: 60,
  backgroundColor: AppColors.primaryColor,
  elevation: 10,
  borderRadius: 50,
};
