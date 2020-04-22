import React, { useCallback } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';

import Book from '@components/Book';

import { WISHLIST } from './constants';
import styles from './styles';

function WishlistScreen() {
  const renderBook = useCallback(
    ({ item }) => (
      <Book title={item.title} author={item.author} image={item.imageUrl} />
    ),
    []
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wishlist}>
        <FlatList
          data={WISHLIST}
          renderItem={renderBook}
          keyExtractor={keyExtractor}
        />
      </View>
    </SafeAreaView>
  );
}

export default WishlistScreen;
