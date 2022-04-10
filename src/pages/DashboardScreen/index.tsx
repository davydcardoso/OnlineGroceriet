import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { BottomButtons, focusedButtonIs } from '../../components/BottomButtons';
import { ListProductsShop } from '../../components/ListProductsShop';
import { useAuth, UserProps } from '../../contexts/AuthContext';

import {
  ContainerBanner,
  ContainerDashboard,
  ContainerHeader,
  ContainerProductsList,
  ContainerSearchBar,
} from './style';

export const DashboardScreen: React.FC = () => {
  const navigation = useNavigation();

  const { user } = useAuth();
  const { name } = user as UserProps;

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
          <View style={ContainerSearchBar}>
            <Image source={require('../../assets/search_icon.png')} />
          </View>
          <View style={ContainerBanner}>
            <Image source={require('../../assets/banner.png')} />
          </View>
          <ListProductsShop />
        </View>
        <BottomButtons
          onPress={[
            () => {},
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
