import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, FlatList, View, ActivityIndicator } from 'react-native';

import { ROUTES } from '@constants/routes';
import { COLORS } from '@constants/colors';
import actionCreators from '@redux/books/actions';
import FlatListItem from './components/FlatListItem';
import styles from './styles';

function LibraryScreen({ navigation }) {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);
  const booksLoading = useSelector((state) => state.books.loading);

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  const renderBook = useCallback(
    ({ item, index }) => (
      <FlatListItem
        item={item}
        index={index}
        onPress={() => navigation.navigate(ROUTES.BookDetail.name, { book: item })}
      />
    ),
    [navigation]
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.library}>
        {booksLoading ? (
          <ActivityIndicator size="large" color={COLORS.blue} />
        ) : (
          <FlatList data={books?.page} renderItem={renderBook} keyExtractor={keyExtractor} />
        )}
      </View>
    </SafeAreaView>
  );
}

export default LibraryScreen;
