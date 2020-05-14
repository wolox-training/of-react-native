import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Text, TouchableOpacity, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { COLORS } from '@constants/colors';
import { SCREEN_WIDTH } from '@constants/dimensions';

import styles from './styles';
import { PADDING } from './constants';

function RentButton() {
  const [rented, setRented] = useState(false);

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  const width = useRef(new Animated.Value(SCREEN_WIDTH - PADDING)).current;

  useEffect(() => {
    if (rented) {
      Animated.timing(width, {
        toValue: 40,
        duration: 500,
        useNativeDriver: false
      }).start();
    }
  }, [rented, width]);

  const onRent = useCallback(() => {
    setRented(true);
  }, []);

  return (
    <AnimatedTouchable style={[styles.button, rented && styles.buttonCheck, { width }]} onPress={onRent}>
      {rented ? (
        <Text style={[styles.text, styles.check]}>{'✔'}</Text>
      ) : (
        <LinearGradient colors={COLORS.gradientColors} style={styles.gradient}>
          <Text style={[styles.text, styles.rentButtonText]}>{'RENT'}</Text>
        </LinearGradient>
      )}
    </AnimatedTouchable>
  );
}

export default RentButton;
