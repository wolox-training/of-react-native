import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, FlatList, View, TouchableOpacity } from 'react-native';

import Book from '@components/Book';
import { ROUTES } from '@constants/routes';

import styles from './styles';
import EmptyResults from './components/EmptyResults';

function SearchScreen({ navigation }) {
  const books = useSelector((state) => state.books.books);
  const search = useSelector((state) => state.books.search);

  const renderBook = useCallback(
    ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.BookDetail.name, { book: item })}>
        <Book title={item.title} author={item.author} image={item.image} />
      </TouchableOpacity>
    ),
    [navigation]
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  const filterBooks = search ? books?.page.filter((item) => item.title.includes(search)) : [];

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
