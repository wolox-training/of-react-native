import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { bookProps } from '@propTypes/book';

import styles from './styles';
import CustomButton from '../CustomButton';

function BookDetail({ book }) {
  const { imageUrl, title, author, year, genre } = book;
  return (
    <View style={styles.container}>
      <View style={styles.book}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.available}>Available</Text>
          <Text>{author}</Text>
          <Text>{year}</Text>
          <Text>{genre}</Text>
        </View>
      </View>
      <CustomButton text='ADD TO WISHLIST' style={styles.addButton} textStyle={styles.addButtonText} />
      <CustomButton text='RENT' style={styles.rentButton} textStyle={styles.rentButtonText} />
    </View>
    
  );
}

BookDetail.propTypes = {
  book: bookProps
};

export default BookDetail;
