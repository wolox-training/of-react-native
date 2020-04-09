import React, { useCallback } from 'react';
import { arrayOf } from 'prop-types';
import { FlatList, SafeAreaView } from 'react-native';

import Book from '../Book';
import { bookProps } from '@models/propTypes';

import styles from './styles';

function Library({ books }) {
  const renderBook = useCallback(
    ({ item }) => (
      <Book title={item.title} author={item.author} image={item.image_url} />
    ),
    []
  );

  const extractBookId = useCallback(item => item.id.toString(), []);

  return (
    <SafeAreaView style={styles.library}>
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={extractBookId}
      />
    </SafeAreaView>
  );
}

Library.propTypes = {
  books: arrayOf(bookProps).isRequired
};

export default Library;
