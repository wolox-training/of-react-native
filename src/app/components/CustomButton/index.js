import React from 'react';
import { string, func } from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function CustomButton({ text, onPress, style, textStyle }) {
  return (
    <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
      <Text style={[textStyle, styles.buttonText]}>{text}</Text>
    </TouchableOpacity>
  );
}

CustomButton.propTypes = {
  text: string,
  onPress: func
};

export default CustomButton;
