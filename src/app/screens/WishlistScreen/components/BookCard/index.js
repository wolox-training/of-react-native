import React from 'react';
import { string } from 'prop-types';
import { Text, View, Image } from 'react-native';

import styles from './styles';

function BookCard({ image, title, author }) {
  return (
    <View style={styles.book}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{author}</Text>
      </View>
    </View>
  );
}

BookCard.defaultProps = {
  image: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg',
  title: '',
  author: ''
};

BookCard.propTypes = {
  image: string,
  title: string.isRequired,
  author: string.isRequired
};

export default BookCard;
