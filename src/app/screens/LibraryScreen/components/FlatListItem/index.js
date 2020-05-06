import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';

import Book from '@components/Book';

import { RANGE, SUPERPOSITION } from './constants';

function FlatListItem({ onPress, index, item }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 900,
      delay: (index + 1) * RANGE - SUPERPOSITION,
      useNativeDriver: true
    }).start();
  }, [index, opacity, item]);

  return (
    <Animated.View style={{ opacity }}>
      <TouchableOpacity onPress={onPress}>
        <Book title={item.title} author={item.author} image={item.image} />
      </TouchableOpacity>
    </Animated.View>
  );
}

export default FlatListItem;
