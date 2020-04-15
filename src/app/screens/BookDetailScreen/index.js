import React from 'react';
import { SafeAreaView } from 'react-native';

import BookDetail from '@components/BookDetail';
import styles from './styles';

function BookDetailScreen({ route }) {
  const { imageUrl, title, author, year, genre } = route?.params?.book;
  return (
    <SafeAreaView style={styles.container}>
      <BookDetail
        imageUrl={imageUrl}
        title={title}
        author={author}
        year={year}
        genre={genre}
      />
    </SafeAreaView>
  );
}

export default BookDetailScreen;
