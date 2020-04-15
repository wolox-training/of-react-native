import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import BookDetail from '@components/BookDetail';
import CommentSection from '@components/CommentSection';

import { COMMENTS } from './constants';
import styles from './styles';

function BookDetailScreen({ route }) {
  const { imageUrl, title, author, year, genre } = route?.params?.book;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BookDetail
          imageUrl={imageUrl}
          title={title}
          author={author}
          year={year}
          genre={genre}
        />
        <CommentSection comments={COMMENTS} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default BookDetailScreen;
