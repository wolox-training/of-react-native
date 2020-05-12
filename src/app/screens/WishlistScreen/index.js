import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { ROUTES } from '@constants/routes';
import BookCard from './components/BookCard';
import styles from './styles';
import EmptyWishlist from './components/EmptyWishlist';

function WishlistScreen({ navigation }) {
  const books = useSelector((state) => state.books.wishlist);
  const { width } = Dimensions.get('window');

  const renderBook = useCallback(
    ({ item }) => (
      <BookCard
        image={item.imageUrl || undefined}
        title={item.title}
        author={item.author}
        onPress={() => navigation.navigate(ROUTES.BookDetail.name, { book: item })}
      />
    ),
    [navigation]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.library}>
        {books?.length ? (
          <Carousel data={books} renderItem={renderBook} sliderWidth={width} layout="stack" itemWidth={300} />
        ) : (
          <EmptyWishlist />
        )}
      </View>
    </SafeAreaView>
  );
}

export default WishlistScreen;
