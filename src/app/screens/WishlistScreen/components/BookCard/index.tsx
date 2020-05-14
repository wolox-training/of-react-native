import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

interface BookCardProps {
  image?: string;
  title: string;
  author: string;
}

function BookCard({ image, title, author } : BookCardProps) {
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

export default BookCard;
