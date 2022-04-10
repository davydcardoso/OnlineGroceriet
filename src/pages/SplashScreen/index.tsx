import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { ContainerPage } from './styles';

export const SplashScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={ContainerPage}>
        <Image source={require('../../assets/logo.png')} />
      </View>
    </SafeAreaView>
  );
};
