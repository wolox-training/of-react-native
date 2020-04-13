import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import BookDetail from '@components/BookDetail';

function BookDetailScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <BookDetail book={route.book} navigation={navigation}/>
    </View>
  );
}

export default BookDetailScreen;
