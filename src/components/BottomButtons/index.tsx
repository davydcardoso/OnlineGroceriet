import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { AppColors } from '../../constants/AppColors';
import {
  ContainerBottomButtons,
  ContainerButton,
  ContainerImageButton,
  IconButtonStyle,
} from './styles';

export enum focusedButtonIs {
  'SHOP',
  'EXPLORE',
  'CART',
  'FAVORITE',
  'ACCOUNT',
}

type BottomButtonsProps = {
  focusedButton?: focusedButtonIs;
  onPress?: Array<() => void>;
};

export const BottomButtons: React.FC<BottomButtonsProps> = ({
  focusedButton = focusedButtonIs.SHOP,
  onPress,
}) => {
  return (
    <View style={ContainerBottomButtons}>
      <View style={ContainerButton}>
        <TouchableOpacity
          onPress={() => {
            onPress?.[0]();
          }}
          style={ContainerImageButton}>
          <Image
            style={[
              IconButtonStyle,
              {
                tintColor:
                  focusedButton === focusedButtonIs.SHOP ? undefined : '#000',
              },
            ]}
            source={require('../../assets/buttons_icons/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onPress?.[1]();
          }}
          style={ContainerImageButton}>
          <Image
            style={[
              IconButtonStyle,
              {
                tintColor:
                  focusedButton === focusedButtonIs.EXPLORE
                    ? AppColors.primaryColor
                    : undefined,
              },
            ]}
            source={require('../../assets/buttons_icons/explore.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onPress?.[2]();
          }}
          style={ContainerImageButton}>
          <Image
            style={[
              IconButtonStyle,
              {
                tintColor:
                  focusedButton === focusedButtonIs.CART
                    ? AppColors.primaryColor
                    : undefined,
              },
            ]}
            source={require('../../assets/buttons_icons/cart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onPress?.[3]();
          }}
          style={ContainerImageButton}>
          <Image
            style={[
              IconButtonStyle,
              {
                tintColor:
                  focusedButton === focusedButtonIs.FAVORITE
                    ? AppColors.primaryColor
                    : undefined,
              },
            ]}
            source={require('../../assets/buttons_icons/favorite.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onPress?.[4]();
          }}
          style={ContainerImageButton}>
          <Image
            style={[
              IconButtonStyle,
              {
                tintColor:
                  focusedButton === focusedButtonIs.ACCOUNT
                    ? AppColors.primaryColor
                    : undefined,
              },
            ]}
            source={require('../../assets/buttons_icons/account.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
