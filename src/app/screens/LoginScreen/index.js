import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Image, ImageBackground, SafeAreaView, TextInput } from 'react-native';

import background from '@assets/General/bc_inicio.png';
import logo from '@assets/General/Group.png';
import CustomButton from '@components/CustomButton';
import { ROUTES } from '@constants/routes';
import actionsCreators from '@redux/auth/actions';
import { COLORS } from '@constants/colors';

import { validateEmail } from './utils';

import styles from './styles';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailValid = validateEmail(email);
  const passwordValid = password.length > 0;
  const disable = !emailValid || !passwordValid;

  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const authLoading = useSelector((state) => state.login.loading);

  const onSubmit = useCallback(() => {
    dispatch(actionsCreators.signIn(email, password));
  }, [dispatch, email, password]);

  useEffect(() => {
    if (token) {
      navigation.navigate(ROUTES.Home.name);
    }
  }, [token, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background} style={styles.imageBackground}>
        <Image source={logo} style={styles.logo} />
        <View styles={styles.loginContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            label="Email"
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            label="Password"
            placeholder="Password"
            secureTextEntry
          />
          <CustomButton
            text="INGRESAR"
            style={[styles.loginButton, disable && styles.buttonDisable]}
            textStyle={disable ? styles.textDisable : styles.loginButtonText}
            onPress={onSubmit}
            disable={disable}
            loading={authLoading}
            loaderColor={COLORS.white}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default LoginScreen;
