import React from "react";
import { ActivityIndicator, View } from "react-native";
import { ContainerLoadingView } from "./styles";

export const LoadingView: React.FC = () => {
  return (
    <View style={ContainerLoadingView} >
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}