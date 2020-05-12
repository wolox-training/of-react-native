import React from 'react';
import { string, func, bool } from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import withLoader from '@components/WithLoader';

import styles from './styles';

const LoadableText = withLoader(Text);

function CustomButton({ text, onPress, style, textStyle, disable, loading, loaderColor }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={disable}>
      <LoadableText loading={loading} size="small" color={loaderColor} style={[styles.buttonText, textStyle]}>
        {text}
      </LoadableText>
    </TouchableOpacity>
  );
}

CustomButton.propTypes = {
  text: string,
  onPress: func,
  disable: bool,
  loading: bool,
  loaderColor: string
};

export default CustomButton;
