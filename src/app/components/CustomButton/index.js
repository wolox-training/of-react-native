import React from 'react';
import { string, func, bool } from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function CustomButton({ text, onPress, style, textStyle, disable }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={disable}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

CustomButton.propTypes = {
  text: string,
  onPress: func,
  disable: bool
};

export default CustomButton;
