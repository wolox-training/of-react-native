import React, { useCallback } from 'react';
import { View } from 'react-native';

import Comment from './components/Comment';

import styles from './styles';

interface CommentsProps {
  comments: {
    id: number,
    username: string,
    comment: string,
    imageUrl?: string,
  }[]
}

function CommentSection({ comments } : CommentsProps) {
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

export default CommentSection;
