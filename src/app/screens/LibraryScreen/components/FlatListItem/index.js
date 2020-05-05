import React, { useEffect } from 'react';
import { Animated, TouchableOpacity } from 'react-native';

import Book from '@components/Book';

const RANGE = 300;
const SUPERPOSITION = 100;

function FlatListItem({ onPress, index, item }) {
  const opacity = new Animated.Value(0);

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
