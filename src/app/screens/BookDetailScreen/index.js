import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import BookDetail from '@components/BookDetail';

function BookDetailScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <BookDetail book={route.params.book}/>
    </View>
  );
}

export default BookDetailScreen;
