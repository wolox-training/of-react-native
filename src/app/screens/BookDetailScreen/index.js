import React from 'react';
import { SafeAreaView } from 'react-native';

import BookDetail from '@components/BookDetail';
import styles from './styles';

function BookDetailScreen({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <BookDetail book={route?.params?.book} />
    </SafeAreaView>
  );
}

export default BookDetailScreen;
