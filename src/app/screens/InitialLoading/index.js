import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Image, ImageBackground, SafeAreaView, ActivityIndicator } from 'react-native';

import background from '@assets/General/bc_inicio.png';
import logo from '@assets/General/Group.png';
import { ROUTES } from '@constants/routes';
import { COLORS } from '@constants/colors';
import actionsCreators from '@redux/auth/actions';

import { getToken } from '@services/AuthService';
import styles from './styles';

function InitialLoading({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    getToken().then((token) => {
      if (token) {
        dispatch(actionsCreators.saveCurrentToken(token));
        navigation.navigate(ROUTES.Home.name);
      } else {
        navigation.navigate(ROUTES.Login.name);
      }
    });
  }, [dispatch, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background} style={styles.imageBackground}>
        <Image source={logo} style={styles.logo} />
        <ActivityIndicator size="large" color={COLORS.white} />
      </ImageBackground>
    </SafeAreaView>
  );
}

export default InitialLoading;
