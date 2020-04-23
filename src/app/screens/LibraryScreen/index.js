import React, { useCallback } from 'react';
import { SafeAreaView, FlatList, View, TouchableOpacity } from 'react-native';

import Book from '@components/Book';
import { ROUTES } from '@constants/routes';

import { BOOKS } from './constants';
import styles from './styles';

function LibraryScreen({ navigation }) {
  const renderBook = useCallback(
    ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.BookDetail.name, { book: item })}>
        <Book title={item.title} author={item.author} image={item.imageUrl} />
      </TouchableOpacity>
    ),
    [navigation]
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.library}>
        <FlatList data={BOOKS} renderItem={renderBook} keyExtractor={keyExtractor} />
      </View>
    </SafeAreaView>
  );
}

export default LibraryScreen;
