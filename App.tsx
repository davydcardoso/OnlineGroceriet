import React from 'react';

import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './src/contexts/CartContext';

const App = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </CartProvider>
    </NavigationContainer>
  );
};

export default App;
