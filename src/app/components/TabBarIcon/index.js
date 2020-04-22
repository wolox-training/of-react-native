import React from 'react';
import { number, bool } from 'prop-types';
import { Image } from 'react-native';

import styles from './styles';

function TabBarIcon({ active, inactive, focused, size }) {
  return (
    <Image
      source={focused ? active : inactive}
      resizeMode="contain"
      style={[styles.image, { width: size }]}
    />
  );
}

TabBarIcon.propTypes = {
  active: number,
  inactive: number,
  focused: bool,
  size: number
};

export default TabBarIcon;
