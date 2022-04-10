import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export const ContainerButtonList: ViewStyle = {
  backgroundColor: '#fff',
  width: '95%',
  height: 70,
  elevation: 5,
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
  flexDirection: 'row',
  marginVertical: 5,
};

export const ImageStyleButton: ImageStyle = {
  position: 'absolute',
  left: 20,
};

export const TextButtonStyle: TextStyle = {
  fontSize: 16,
  marginLeft: 10,
  position: 'absolute',
  left: 50,
};

export const ImageBackArrowButtonStyle: ImageStyle = {
  position: 'absolute',
  right: 20,
};
