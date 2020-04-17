import React from 'react';
import { string } from 'prop-types';
import { Text, View, Image } from 'react-native';

import styles from './styles';

function Comment({ image, text, user }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.user}>{user}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

Comment.defaultProps = {
  image: 'https://i.ya-webdesign.com/images/default-avatar-png-18.png',
  text: '',
  user: ''
};

Comment.propTypes = {
  image: string.isRequired,
  text: string.isRequired,
  user: string.isRequired
};

export default Comment;