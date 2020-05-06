import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { SafeAreaView, FlatList, View, TouchableOpacity } from 'react-native';

import Book from '@components/Book';
import { ROUTES } from '@constants/routes';

import styles from './styles';
import EmptyResults from './components/EmptyResults';

const filterBooksSelector = createSelector(
  (state) => state.books,
  (booksState) =>
    booksState.search ? booksState.books?.page.filter((item) => item.title.includes(booksState.search)) : []
);

function SearchScreen({ navigation }) {
  const filterBooks = useSelector(filterBooksSelector);

  const renderBook = useCallback(
    ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.BookDetail.name, { book: item })}>
        <Book title={item.title} author={item.author} image={item.image} />
      </TouchableOpacity>
    ),
    [navigation]
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.books}>
        <FlatList
          data={filterBooks}
          renderItem={renderBook}
          keyExtractor={keyExtractor}
          ListEmptyComponent={EmptyResults}
        />
      </View>
    </SafeAreaView>
  );
}

export default SearchScreen;
