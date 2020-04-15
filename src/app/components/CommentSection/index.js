import React, { useCallback } from 'react';
import { arrayOf } from 'prop-types';
import { FlatList, View } from 'react-native';

import { commentProps } from '@propTypes/comment';
import Comment from './components/Comment';

import styles from './styles';

function CommentSection({ comments }) {
  const renderComment = useCallback(
    ({ item }) => (
      <View>
        <Comment
          user={item.username}
          text={item.comment}
          image={item.imageUrl || undefined}
        />
      </View>
    ),
    []
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        renderItem={renderComment}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

CommentSection.propTypes = {
  comments: arrayOf(commentProps).isRequired
};

export default CommentSection;
