import React from 'react';
import { Text, TouchableOpacity, GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';

import withLoader from '@components/WithLoader';

import styles from './styles';

export interface Props {
  text: string;
  loaderColor: string;
  disable?: boolean;
  loading?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  textStyle?: StyleProp<TextStyle>;
  style: StyleProp<ViewStyle>;
}

const LoadableText = withLoader(Text);

function CustomButton({ text, onPress, style, textStyle, disable, loading, loaderColor }: Props) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={disable}>
      <LoadableText
        loading={!!loading}
        size="small"
        color={loaderColor}
        style={[styles.buttonText, textStyle]}>
        {text}
      </LoadableText>
    </TouchableOpacity>
  );
}

export default CustomButton;
