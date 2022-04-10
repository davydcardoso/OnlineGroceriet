import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { Input } from '../../components/Input';
import { AppColors } from '../../constants/AppColors';
import { TextStyles } from '../../constants/TextStyles';
import { SignInCredentials, useAuth } from '../../contexts/AuthContext';
import {
  ContainerButtonSignIn,
  ContainerInputs,
  ContainerPage,
  ContainerTextSignUp,
  TextButtonStyle,
} from './styles';

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

export const SignInPage: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const { signIn } = useAuth();

  async function onSubmit(data: any) {
    const { email, password } = data as SignInCredentials;

    if (emailRegex.test(email) && password.length >= 6) {
      await signIn({ email, password });
      return;
    }

    if (Platform.OS == 'android') {
      ToastAndroid.showWithGravity(
        'Email ou senha inválidos',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        <View style={ContainerPage}>
          <Image source={require('../../assets/mini_logo.png')} />

          <View style={ContainerInputs}>
            <Text style={[TextStyles.titleText, { marginBottom: 10 }]}>
              Loging
            </Text>
            <Text
              style={{ fontFamily: TextStyles.defaultFont, marginBottom: 30 }}>
              Enter your emails and password
            </Text>
            <Input control={control} name="email" hint="Email" />
            <Input
              control={control}
              name="password"
              hint="Password"
              isPassword
            />
          </View>

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={ContainerButtonSignIn}>
            <Text style={TextButtonStyle}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={ContainerTextSignUp}>
              <Text style={{ fontSize: 16 }}>Don’t have an account?</Text>
              <Text style={{ fontSize: 16, color: AppColors.primaryColor }}>
                {' '}
                Singup
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
