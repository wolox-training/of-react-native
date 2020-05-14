import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

interface TabBarIconProps {
  active: number;
  inactive: number;
  focused: boolean;
  size: number;
}

function TabBarIcon({ active, inactive, focused, size } : TabBarIconProps) {
  return (
    <Image
      source={focused ? active : inactive}
      resizeMode="contain"
      style={[styles.image, { width: size }]}
    />
  );
}

export default TabBarIcon;
