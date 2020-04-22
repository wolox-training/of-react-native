import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { COLORS } from '@constants/colors';
import backButton from '@assets/Navigationbar/ic_back.png';
import icNavbar from '@assets/General/bc_navbar.png';
import CustomHeader from '@components/CustomHeader';

const styles = StyleSheet.create({
  header: {
    height: 80
  },
  headerTitle: {
    textTransform: 'uppercase'
  },
  backImage: {
    height: 30,
    width: 30
  },
  background: {
    width: '100%'
  }
});

export const stackNavigatorConfig = {
  gestureEnabled: true,
  headerStyle: styles.header,
  headerTintColor: COLORS.white,
  headerTitleStyle: styles.headerTitle,
  headerBackImage: () => <Image source={backButton} style={styles.backImage} />,
  header: CustomHeader,
  headerBackground: () => (
    <Image
      source={icNavbar}
      resizeMode="stretch"
      style={[styles.background, StyleSheet.absoluteFill]}
    />
  )
};
