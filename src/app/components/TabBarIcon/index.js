import React from 'react';
import { number, bool } from 'prop-types';
import { Image } from 'react-native';

function TabBarIcon({ active, inactive, focused, size }) {
  return (
    <Image
      source={focused ? active : inactive}
      resizeMode="contain"
      style={{ width: size, marginTop: 5 }}
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
