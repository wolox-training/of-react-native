import React from 'react';
import { number, bool } from 'prop-types';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    marginTop: 5
  }
});

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
