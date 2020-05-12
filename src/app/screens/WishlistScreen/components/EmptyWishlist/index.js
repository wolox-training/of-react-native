import React from 'react';
import { View, Text, Image } from 'react-native';

import starInactive from '@assets/toolbar/ic_wishlist.png';

import styles from './styles';

function EmptyWishlist() {
  return (
    <View style={styles.container}>
      <Image source={starInactive} style={styles.image} />
      <View>
        <Text style={styles.title}>No books added to wishlist</Text>
        <Text style={styles.text}>Find your next books!</Text>
      </View>
    </View>
  );
}

export default EmptyWishlist;
