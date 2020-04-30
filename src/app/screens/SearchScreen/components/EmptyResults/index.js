import React from 'react';
import { View, Text, Image } from 'react-native';

import searchImg from '@assets/General/search_img.png';

import styles from './styles';

function EmptyResults() {
  return (
    <View style={styles.container}>
      <Image source={searchImg} style={styles.image} />
      <View>
        <Text style={styles.title}>Search in Wbooks</Text>
        <Text>Find your favorite writers and books!</Text>
      </View>
    </View>
  );
}

export default EmptyResults;
