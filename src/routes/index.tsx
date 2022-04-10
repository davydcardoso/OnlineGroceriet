import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { SplashScreen } from '../pages/SplashScreen';

import { AuthRoutes } from './auth.routes';
import { UserRoutes } from './user.routes';

export const Routes: React.FC = () => {
  const { loading, user, signOut } = useAuth();

  if (loading) {
    return <SplashScreen />;
  }

  return !user ? <AuthRoutes /> : <UserRoutes />;
};
