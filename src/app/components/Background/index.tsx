import React from 'react';
import { Image, StyleSheet } from 'react-native';

import icNavbar from '@assets/General/bc_navbar.png';

import styles from './styles';

function Background() {
  return (
    <Image source={icNavbar} resizeMode="stretch" style={[styles.background, StyleSheet.absoluteFill]} />
  );
}

export default Background;
