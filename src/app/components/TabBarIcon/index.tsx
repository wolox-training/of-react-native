import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

interface Props {
  active: number;
  inactive: number;
  focused: boolean;
  size: number;
}

function TabBarIcon({ active, inactive, focused, size }: Props) {
  return (
    <Image
      source={focused ? active : inactive}
      resizeMode="contain"
      style={[styles.image, { width: size }]}
    />
  );
}

export default TabBarIcon;
