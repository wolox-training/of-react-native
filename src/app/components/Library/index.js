import React, { useCallback } from 'react';
import { arrayOf } from 'prop-types';
import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

import { bookProps } from '@propTypes/book';
import Book from '@components/Book';

import styles from './styles';

function Library({ books, navigation }) {
  //const onBookPress = useCallback(() => navigation.push('DetailBook', {}), []);

  const renderBook = useCallback(
    ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('BookDetail', { book: item })}
    >
      <Book title={item.title} author={item.author} image={item.imageUrl}/>
    </TouchableOpacity>
    ),[]
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
    <SafeAreaView style={styles.library}>
      <FlatList data={books} renderItem={renderBook} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
}

Library.propTypes = {
  books: arrayOf(bookProps).isRequired
};

export default Library;
