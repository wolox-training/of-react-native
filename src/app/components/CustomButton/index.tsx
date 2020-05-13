import React, { ReactChild, ReactNode } from 'react';
import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native';

import withLoader from '@components/WithLoader';

import styles from './styles';

export interface ButtonProps {
  text: string;
  loaderColor: string;
  disable: boolean;
  loading: boolean;
  onPress: (event: GestureResponderEvent) => void,
  textStyle: object;
  style: object;
}

const LoadableText = withLoader(Text);

function CustomButton({ text, onPress, style, textStyle, disable, loading, loaderColor } : ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={disable}>
      <LoadableText loading={loading} size="small" color={loaderColor} style={[styles.buttonText, textStyle]}>
        {text}
      </LoadableText>
    </TouchableOpacity>
  );
}

export default CustomButton;
