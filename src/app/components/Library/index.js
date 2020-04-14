import React, { useCallback } from 'react';
import { arrayOf } from 'prop-types';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { bookProps } from '@propTypes/book';
import Book from '@components/Book';
import { ROUTES } from '@constants/routes';

import styles from './styles';

function Library({ books, navigation }) {
  const renderBook = useCallback(
    ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.BookDetail, { book: item })}>
        <Book title={item.title} author={item.author} image={item.imageUrl} />
      </TouchableOpacity>
    ),
    [navigation]
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
    <View style={styles.library}>
      <FlatList data={books} renderItem={renderBook} keyExtractor={keyExtractor} />
    </View>
  );
}

Library.propTypes = {
  books: arrayOf(bookProps).isRequired
};

export default Library;
