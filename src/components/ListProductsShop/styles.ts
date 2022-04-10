import { Dimensions, ViewStyle } from 'react-native';

export const ScrollContainer: ViewStyle = {
  flex: 1,
  paddingTop: 5,
  width: Dimensions.get('screen').width,
  flexDirection: 'column',
};

export const ContainerProducts: ViewStyle = {
  alignContent: 'center',
  alignItems: 'center',
  width: Dimensions.get('screen').width,
};

export const ContainerProduct: ViewStyle = {
  width: Dimensions.get('screen').width / 2.5,
  height: 230,
  borderRadius: 18,
  alignContent: 'center',
  alignItems: 'center',
  marginBottom: 7,
  marginTop: 4,
  marginHorizontal: 7,
  paddingTop: 7,
  elevation: 10,
  backgroundColor: '#fff',
};

export const ContainerTextProduct: ViewStyle = {
  marginTop: 5,
};

export const ContainerBottomProduct: ViewStyle = {
  flexDirection: 'row',
  position: 'absolute',
  bottom: 5,
};
