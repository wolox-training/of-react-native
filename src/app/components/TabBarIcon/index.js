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
  active: number.isRequired,
  inactive: number.isRequired,
  focused: bool.isRequired,
  size: number.isRequired
};

export default TabBarIcon;
