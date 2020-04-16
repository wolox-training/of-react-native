import React, { useCallback } from 'react';
import { arrayOf } from 'prop-types';
import { View } from 'react-native';

import { commentProps } from '@propTypes/comment';
import Comment from './components/Comment';

import styles from './styles';

function CommentSection({ comments }) {
  const renderComment = useCallback(
    (item) => (
      <Comment
        key={item.id.toString()}
        user={item.username}
        text={item.comment}
        image={item.imageUrl || undefined}
      />
    ),
    []
  );

  return <View style={styles.container}>{comments.map((item) => renderComment(item))}</View>;
}

CommentSection.propTypes = {
  comments: arrayOf(commentProps).isRequired
};

export default CommentSection;
