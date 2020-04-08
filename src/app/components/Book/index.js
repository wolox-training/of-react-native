import React from 'react';
import { string } from 'prop-types';
import { Text, View, Image, ActivityIndicator } from 'react-native';

import styles from './styles';

function Book({ bookImage, bookTitle, bookAuthor }) {
  return (
    <View style={styles.book}>
      <Image 
          source={{ uri: bookImage }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.bookInfo}>
          <Text style={styles.title}>{bookTitle}</Text>
          <Text>{bookAuthor}</Text>
      </View>
    </View>
  );
}

Book.propTypes = {
    bookImage: string,
    bookTitle: string.isRequired,
    bookAuthor: string.isRequired,  
};

export default Book;