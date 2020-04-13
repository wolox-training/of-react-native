import React from 'react';
import { View } from 'react-native';

import { BOOKS } from './constants';
import styles from './styles';
import BookDetail from '@components/BookDetail';

export default function App() {
  return (
    <View style={styles.container}>
      <BookDetail book={BOOKS[0]} />
    </View>
  );
}
