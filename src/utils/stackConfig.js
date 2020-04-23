import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { COLORS } from '@constants/colors';
import backButton from '@assets/Navigationbar/ic_back.png';
import icNavbar from '@assets/General/bc_navbar.png';
import CustomHeader from '@components/CustomHeader';

export const stackNavigatorConfig = {
  gestureEnabled: true,
  headerStyle: {
    height: 80
  },
  headerTintColor: COLORS.white,
  headerTitleStyle: {
    textTransform: 'uppercase'
  },
  headerBackImage: () => (
    <Image
      source={backButton}
      style={{
        height: 30,
        width: 30
      }}
    />
  ),
  header: CustomHeader,
  headerBackground: () => (
    <Image
      source={icNavbar}
      resizeMode="stretch"
      style={[
        {
          width: '100%'
        },
        StyleSheet.absoluteFill
      ]}
    />
  )
};
