import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { ProductsProps, useCart } from '../../contexts/CartContext';
import { api } from '../../hooks/useApi';
import { LoadingView } from '../LoadingView';
import {
  ContainerBottomProduct,
  ContainerProduct,
  ContainerProducts,
  ContainerTextProduct,
  ScrollContainer,
} from './styles';

export const ListProductsShop: React.FC = () => {
  const { signOut } = useAuth();
  const { addToCart, decrement, products: cartProducts } = useCart();

  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const getProducts = useCallback(async () => {
    const token = await AsyncStorage.getItem('@onlinegroceriet:token');

    if (!token && Platform.OS == 'android') {
      ToastAndroid.show(
        'Você precisa estar logado para acessar essa página',
        ToastAndroid.LONG,
      );
      signOut();
    }

    const response = await api.get('/products/', {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status == 200) {
      setProducts(response.data.products);

      console.log(products);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loading) {
      getProducts();
    }
  }, []);

  if (loading) {
    return <LoadingView />;
  }

  if (products.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Não há produtos cadastrados</Text>
      </View>
    );
  }

  return (
    <ScrollView style={ScrollContainer}>
      <View style={ContainerProducts}>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(
                  'ProductViewer' as never,
                  {
                    id: item.id,
                  } as never,
                );
              }}
              style={ContainerProduct}
              key={item.id}>
              <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri: item.image,
                }}
              />
              <View style={ContainerTextProduct}>
                <Text style={{ fontSize: 17 }}>{item.name}</Text>
                <Text style={{ fontSize: 14 }}>{item.description}</Text>
              </View>
              <View style={ContainerBottomProduct}>
                <Text
                  style={{
                    fontSize: 17,
                    marginRight: 20,
                    marginTop: 10,
                    color: '#000',
                  }}>
                  R${item.value}
                </Text>
                <TouchableOpacity onPress={() => addToCart(item)}>
                  <Image source={require('../../assets/button_add.png')} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};
