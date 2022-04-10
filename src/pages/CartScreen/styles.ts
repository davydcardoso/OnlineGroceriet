import { Dimensions, TextStyle, ViewStyle } from 'react-native';
import { AppColors } from '../../constants/AppColors';

export const ContainerDashboard: ViewStyle = {
  flex: 1,
  alignContent: 'center',
  alignItems: 'center',
  paddingTop: 10,
  backgroundColor: '#fff',
};

export const ContainerHeader: ViewStyle = {
  height: '14%',
  width: '100%',
  alignContent: 'center',
  alignItems: 'center',
};

export const ContainerProductsList: ViewStyle = {
  width: '100%',
  height: '62%',
  alignItems: 'center',
  paddingBottom: 10,
};

export const ContainerProducts: ViewStyle = {
  alignContent: 'center',
  alignItems: 'center',
  width: Dimensions.get('screen').width,
};

export const ScrollContainer: ViewStyle = {
  flex: 1,
  paddingTop: 5,
  width: Dimensions.get('screen').width,
};

export const ContainerProductDetail: ViewStyle = {
  width: '95%',
  height: 120,
  marginVertical: 10,
  flexDirection: 'row',
  paddingHorizontal: 10,
};

export const ContainerDetailProduct: ViewStyle = {
  marginLeft: 10,
};

export const ContainerButtonListCart: ViewStyle = {
  marginTop: 10,
  flexDirection: 'row',
  alignItems: 'center',
};

export const TextProductQuantity: TextStyle = {
  fontSize: 17,
  fontWeight: '600',
  color: '#000',
  marginHorizontal: 10,
};

export const TextTotalPriceProduct: TextStyle = {
  fontSize: 18,
  fontWeight: '600',
  color: '#000',
  position: 'absolute',
  right: 15,
  top: 45,
};

export const ContainerButtonRemoveProduct: ViewStyle = {
  position: 'absolute',
  right: 15,
  top: 5,
};

export const ContainerButtonConfirmPurchase: ViewStyle = {
  width: 364,
  height: 67,
  backgroundColor: AppColors.primaryColor,
  marginBottom: 10,
  borderRadius: 19,
  alignItems: 'center',
  justifyContent: 'center',
};

export const TextButtonConfirmPurchase: TextStyle = {
  fontSize: 17,
  fontWeight: '500',
  color: '#FFF',
};

export const ContainerTextTotalButtonConfirmPurchase: ViewStyle = {
  backgroundColor: AppColors.tertiaryColor,
  paddingHorizontal: 10,
  paddingVertical: 2,
  alignItems: 'center',
  position: 'absolute',
  right: 15,
  borderRadius: 4,
};

export const TextTotalButtonConfirmPurchase: TextStyle = {
  fontSize: 17,
  fontWeight: '500',
  color: '#FFF',
};

// modal

export const CenteredView: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
  width: 500
};

export const ContainerModalView: ViewStyle = {
  margin: 20,
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
};

export const ModalTextTitle: TextStyle = {
  marginBottom: 15,
  textAlign: 'center',
};

export const ButtonModal: ViewStyle = {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
};

export const ButtonCloseModal: ViewStyle = {
  backgroundColor: '#2196F3',
};

export const TextStyleModal: TextStyle = {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
};
