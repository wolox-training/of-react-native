import React from 'react';
import { View } from 'react-native';

import BookDetail from '@components/BookDetail';
import styles from './styles';

function BookDetailScreen({ route }) {
  return (
    <View style={styles.container}>
      <BookDetail book={route?.params?.book} />
    </View>
  );
}

export default BookDetailScreen;
