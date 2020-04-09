import React from 'react';
import {string} from 'prop-types';
import {Text, View, Image, ActivityIndicator} from 'react-native';

import styles from './styles';

function Book({ image, title, author }) {
  return (
    <View style={styles.book}>
      <Image
        source={{uri: image}}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{author}</Text>
      </View>
    </View>
  );
}

Book.propTypes = {
  image: string,
  title: string.isRequired,
  author: string.isRequired,
};

export default Book;
