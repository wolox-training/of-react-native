import React, { useCallback, useState } from 'react';
import { Text, TouchableOpacity, Animated } from 'react-native';

import styles from './styles';

function RentButton() {
  const [rented, setRented] = useState(false);

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  const width = new Animated.Value(280);

  const onRent = useCallback(() => {
    setRented(true);
    Animated.timing(width, {
      toValue: 50,
      duration: 300,
      useNativeDriver: false
    }).start();
  }, [width]);

  return (
    <AnimatedTouchable style={[rented ? styles.buttonCheck : styles.rentButton, { width }]} onPress={onRent}>
      <Text style={rented ? styles.check : styles.rentButtonText}>{rented ? '✔' : 'RENT'}</Text>
    </AnimatedTouchable>
  );
}

export default RentButton;
