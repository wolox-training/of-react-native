import React, { useCallback, useState, useEffect } from 'react';
import { Text, TouchableOpacity, Animated } from 'react-native';

import styles from './styles';
import { STARTING_WIDTH } from './constants';

function RentButton() {
  const [rented, setRented] = useState(false);

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  const width = new Animated.Value(STARTING_WIDTH);

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
    <AnimatedTouchable
      style={[styles.button, rented ? styles.buttonCheck : styles.rentButton, { width }]}
      onPress={onRent}>
      <Text style={[styles.text, rented ? styles.check : styles.rentButtonText]}>
        {rented ? '✔' : 'RENT'}
      </Text>
    </AnimatedTouchable>
  );
}

export default RentButton;
