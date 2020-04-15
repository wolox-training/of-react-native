import React from 'react';
import { Text, View, Image } from 'react-native';
import { string } from 'prop-types';

import CustomButton from '@components/CustomButton';
import styles from './styles';

function BookDetail({ imageUrl, title, author, year, genre }) {
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
      <CustomButton text="ADD TO WISHLIST" style={styles.addButton} textStyle={styles.addButtonText} />
      <CustomButton text="RENT" style={styles.rentButton} textStyle={styles.rentButtonText} />
    </View>
  );
}

BookDetail.propTypes = {
  imageUrl: string,
  title: string,
  author: string,
  year: string,
  genre: string
};

export default BookDetail;
