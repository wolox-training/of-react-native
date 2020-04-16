import React from 'react';
import { string } from 'prop-types';
import { Text, View, Image } from 'react-native';

import styles from './styles';

function Book({ image, title, author }) {
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

Book.defaultProps = {
  image: '',
  title: '',
  author: ''
};

Book.propTypes = {
  image: string,
  title: string.isRequired,
  author: string.isRequired
};

export default Book;
