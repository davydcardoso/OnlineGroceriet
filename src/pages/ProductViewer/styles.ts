import { Dimensions, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { AppColors } from '../../constants/AppColors';

export const ContainerBody: ViewStyle = {
  flex: 1,
  width: '100%',
  height: '100%',
};

export const ContainerHeader: ViewStyle = {
  width: '100%',
  height: 330,
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
};

export const ContainerBodyStyle: ViewStyle = {
  width: '100%',
  alignItems: 'center',
};

export const ContainerTitleProduct: ViewStyle = {
  width: '100%',
  marginLeft: 30,
  flexDirection: 'row',
};

export const ContainerImageLike: ViewStyle = {
  position: 'absolute',
  right: 45,
  marginTop: 10,
};

export const ImageLikeStyle: ImageStyle = {
  width: 35,
  height: 35,
};

export const ContainerRowCountProducts: ViewStyle = {
  width: '100%',
  height: 50,
  marginTop: 5,
  paddingLeft: 20,
  flexDirection: 'row',
  alignItems: 'center',
};

export const TextValueProductStyle: TextStyle = {
  fontSize: 18,
  color: '#000',
  // fontWeight: 'bold',
  position: 'absolute',
  right: 20,
};

export const ContainerDetailProduct: ViewStyle = {
  width: '100%',
  height: 200,
  marginLeft: 30,
  marginTop: 20,
};

export const ButtonAddProductCart: ViewStyle = {
  width: 364,
  height: 67,
  borderRadius: 19,
  backgroundColor: AppColors.primaryColor,
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
};
