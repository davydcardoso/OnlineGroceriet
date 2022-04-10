import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomButtons, focusedButtonIs } from '../../components/BottomButtons';
import { useAuth, UserProps } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

import {
  ButtonCloseModal,
  ButtonModal,
  CenteredView,
  ContainerButtonConfirmPurchase,
  ContainerButtonListCart,
  ContainerButtonRemoveProduct,
  ContainerDashboard,
  ContainerDetailProduct,
  ContainerHeader,
  ContainerModalView,
  ContainerProductDetail,
  ContainerProducts,
  ContainerProductsList,
  ContainerTextTotalButtonConfirmPurchase,
  ModalTextTitle,
  ScrollContainer,
  TextButtonConfirmPurchase,
  TextProductQuantity,
  TextStyleModal,
  TextTotalButtonConfirmPurchase,
  TextTotalPriceProduct,
} from './styles';

export const CartScreen: React.FC = () => {
  const { user } = useAuth();
  const { name } = user as UserProps;
  const { products, decrement, increment, remove, cartTotal } = useCart();

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={ContainerDashboard}>
        <View style={ContainerHeader}>
          <Image source={require('../../assets/mini_logo.png')} />
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>
              Hello:{' '}
            </Text>
            <Text style={{ fontSize: 15, color: '#000', fontWeight: '600' }}>
              {name}
            </Text>
          </View>
        </View>
        <View style={ContainerProductsList}>
          <ScrollView style={ScrollContainer}>
            <View style={ContainerProducts}>
              {products.map(product => {
                return (
                  <View style={ContainerProductDetail} key={product.id}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={{ uri: product.image }}
                    />
                    <View style={ContainerDetailProduct}>
                      <Text style={{ fontSize: 17, fontWeight: '600' }}>
                        {product.name}
                      </Text>
                      <Text style={{ fontSize: 14, fontWeight: '500' }}>
                        Valor unitário: R$ {product.value}
                      </Text>
                      <View style={ContainerButtonListCart}>
                        <TouchableOpacity
                          onPress={() => decrement(product.id)}
                          style={{ marginTop: 1 }}>
                          <Image
                            source={require('../../assets/icons/remove.png')}
                          />
                        </TouchableOpacity>
                        <Text style={TextProductQuantity}>
                          {product.quantity}
                        </Text>
                        <TouchableOpacity onPress={() => increment(product.id)}>
                          <Image
                            source={require('../../assets/icons/add.png')}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text style={TextTotalPriceProduct}>
                      R$ {product.value * product.quantity}
                    </Text>
                    <TouchableOpacity
                      onPress={() => remove(product.id)}
                      style={ContainerButtonRemoveProduct}>
                      <Image source={require('../../assets/icons/close.png')} />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={ContainerButtonConfirmPurchase}
          onPress={() => {}}>
          <Text style={TextButtonConfirmPurchase}>Go to Checkout</Text>
          <View style={ContainerTextTotalButtonConfirmPurchase}>
            <Text style={TextTotalButtonConfirmPurchase}>{cartTotal()}</Text>
          </View>
        </TouchableOpacity>
        <BottomButtons
          focusedButton={focusedButtonIs.CART}
          onPress={[
            () => {
              navigation.navigate('Dashboard' as never);
            },
            () => {},
            () => {
              navigation.navigate('Cart' as never);
            },
            () => {},
            () => {
              navigation.navigate('Account' as never);
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};
