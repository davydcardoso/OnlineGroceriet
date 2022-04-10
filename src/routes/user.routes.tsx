import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DashboardScreen } from '../pages/DashboardScreen';
import { AccountScreen } from '../pages/AccountScreen';
import { ProductViewer } from '../pages/ProductViewer';
import { CartScreen } from '../pages/CartScreen';

const Stack = createNativeStackNavigator();

export const UserRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductViewer"
        component={ProductViewer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
