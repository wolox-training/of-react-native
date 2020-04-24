import React from 'react';
import { View, Image, ImageBackground, SafeAreaView, TextInput } from 'react-native';

import background from '@assets/General/bc_inicio.png';
import logo from '@assets/General/Group.png';
import CustomButton from '@components/CustomButton';

import styles from './styles';

function LoginScreen({ onSubmit, onChangeEmail, onChangePassword, email, password }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background} style={styles.imageBackground}>
        <Image source={logo} style={styles.logo} />
        <View styles={styles.loginContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeEmail(text)}
            value={email}
            label="Email"
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangePassword(text)}
            value={password}
            label="Password"
            placeholder="Password"
            secureTextEntry
          />
          <CustomButton
            text="INGRESAR"
            style={styles.loginButton}
            textStyle={styles.loginButtonText}
            onPress={onSubmit}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default LoginScreen;
