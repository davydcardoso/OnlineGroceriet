import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ButtonAccount } from '../../components/ButtonAccount';
import { useAuth, UserProps } from '../../contexts/AuthContext';

import {
  ContainerAccount,
  ContainerAccountHeader,
  ContainerAvatar,
  ContainerBodyButtons,
  ContainerFloatActionButton,
  ContainerSafeAreaAccount,
  ContainerScrollBody,
  ContainerTextHeader,
} from './styles';

export const AccountScreen: React.FC = () => {
  const navigation = useNavigation();

  const { user, signOut } = useAuth();
  const { name, email } = user as UserProps;

  return (
    <SafeAreaView style={ContainerSafeAreaAccount}>
      <View style={ContainerAccount}>
        <View style={ContainerAccountHeader}>
          <View style={ContainerAvatar}>
            {/* <ActivityIndicator size="large" color="#0000ff" /> */}
          </View>
          <View style={ContainerTextHeader}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>
              {name}
            </Text>
            <Text style={{ fontSize: 18, color: '#000' }}>{email}</Text>
          </View>
        </View>
        <ScrollView style={ContainerScrollBody}>
          <View style={ContainerBodyButtons}>
            <ButtonAccount
              hint="Orders"
              image={require('../../assets/list_menu_icons/OrdersIcon.png')}
              functionOnPress={() => {}}
            />
            <ButtonAccount
              hint="My Details"
              image={require('../../assets/list_menu_icons/MyDetailsIcon.png')}
              functionOnPress={() => {}}
            />
            <ButtonAccount
              hint="Delivery Address"
              image={require('../../assets/list_menu_icons/DeliveryAddressIcon.png')}
              functionOnPress={() => {}}
            />
            <ButtonAccount
              hint="Payment Methods"
              image={require('../../assets/list_menu_icons/PaymentMethodsIcon.png')}
              functionOnPress={() => {}}
            />
            <ButtonAccount
              hint="Promo Card"
              image={require('../../assets/list_menu_icons/PromoCardIcon.png')}
              functionOnPress={() => {}}
            />
            <ButtonAccount
              hint="Notifications"
              image={require('../../assets/list_menu_icons/NotificationIcon.png')}
              functionOnPress={() => {}}
            />
            <ButtonAccount
              hint="Help"
              image={require('../../assets/list_menu_icons/HelpIcon.png')}
              functionOnPress={() => {}}
            />
            <ButtonAccount
              hint="About"
              image={require('../../assets/list_menu_icons/AboutIcon.png')}
              functionOnPress={() => {}}
            />

            <ButtonAccount
              hint="Log Out"
              image={require('../../assets/LogOffIcon.png')}
              functionOnPress={signOut}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Dashboard' as never);
          }}
          style={ContainerFloatActionButton}>
          <Image
            style={{
              tintColor: '#000',
            }}
            source={require('../../assets/buttons_icons/home.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
