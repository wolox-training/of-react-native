import React from 'react';
import { View } from 'react-native';

import Library from '@components/Library';
import { BOOKS } from './constants';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Library books={BOOKS} />
    </View>
  );
}
