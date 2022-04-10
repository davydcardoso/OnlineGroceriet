import React, { useCallback, useEffect, useState } from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoadingView } from '../../components/LoadingView';
import AsyncStorage from '@react-native-community/async-storage';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../hooks/useApi';

import {
  ButtonAddProductCart,
  ContainerBody,
  ContainerBodyStyle,
  ContainerDetailProduct,
  ContainerHeader,
  ContainerImageLike,
  ContainerRowCountProducts,
  ContainerTitleProduct,
  ImageLikeStyle,
  TextValueProductStyle,
} from './styles';
import { ProductsProps, useCart } from '../../contexts/CartContext';

type ProductViewerProps = {
  route: {
    params: {
      id: string;
    };
  };
};

export const ProductViewer: React.FC<ProductViewerProps> = ({ route }) => {
  const {} = useNavigation();
  const { signOut } = useAuth();
  const { addToCart, decrement, increment, products: cartProducts } = useCart();

  const [like, setLike] = useState(false);
  const [countProduct, setCountProduct] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductsProps | null>(null);

  const getProducts = useCallback(async () => {
    const token = await AsyncStorage.getItem('@onlinegroceriet:token');

    if (!token && Platform.OS == 'android') {
      ToastAndroid.show(
        'Você precisa estar logado para acessar essa página',
        ToastAndroid.LONG,
      );
      signOut();
    }

    const response = await api.get(`/products/${route.params.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status == 200) {
      setProducts(response.data.product);
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

  if (!products) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Não há produtos cadastrados</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={ContainerBody}>
        <View style={ContainerHeader}>
          <Image
            style={{ width: 300, height: 300 }}
            source={{
              uri: products.image,
            }}
          />
        </View>
        <View style={ContainerBodyStyle}>
          <View style={ContainerTitleProduct}>
            <View>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                {products.name}
              </Text>
              <Text style={{ fontSize: 17, color: '#000' }}>
                Valor unitário: R$ {products.value}
              </Text>
            </View>

            <TouchableOpacity
              style={ContainerImageLike}
              onPress={() => setLike(!like)}>
              <Image
                style={[ImageLikeStyle, { tintColor: !like ? '#000' : '#f00' }]}
                source={require('../../assets/icons/like.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={ContainerRowCountProducts}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => {
                  if (countProduct > 1) {
                    setCountProduct(countProduct - 1);
                    decrement(products.id);
                  }
                }}>
                <Image source={require('../../assets/icons/remove.png')} />
              </TouchableOpacity>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontSize: 18,
                  color: '#000',
                  fontWeight: '600',
                }}>
                {countProduct}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setCountProduct(countProduct + 1);
                  increment(products.id);
                }}>
                <Image source={require('../../assets/icons/add.png')} />
              </TouchableOpacity>
            </View>
            <Text style={TextValueProductStyle}>
              R$ {products.value * countProduct}
            </Text>
          </View>
          <View style={ContainerDetailProduct}>
            <Text style={{ fontSize: 17, marginBottom: 10 }}>
              Product Details
            </Text>
            <Text style={{ fontSize: 14, color: '#000', marginLeft: 5 }}>
              {products.description}
            </Text>
          </View>

          <TouchableOpacity
            style={ButtonAddProductCart}
            onPress={() => {
              console.log(cartProducts.length);
              // addToCart(products);
            }}>
            <Text style={{ fontSize: 18, color: '#FFF', fontWeight: '600' }}>
              Add To Basket
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
