import React from 'react';
import { string, func } from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function CustomButton({ text, onPress, style, textStyle }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

CustomButton.propTypes = {
  text: string,
  onPress: func
};

export default CustomButton;
