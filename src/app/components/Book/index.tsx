import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

export interface Props {
  image: string;
  title: string;
  author: string;
}

function Book({ image, title, author }: Props) {
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

export default Book;
