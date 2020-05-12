import React, { useCallback, useState } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';

import CustomButton from '@components/CustomButton';
import CommentSection from '@components/CommentSection';
import actionCreators from '@redux/books/actions';
import { ROUTES } from '@constants/routes';

import OkModal from './components/OkModal';
import { COMMENTS } from './constants';
import styles from './styles';
import RentButton from './components/RentButton';

function BookDetailScreen({ navigation, route }) {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const { imageUrl, title, author, year, genre } = route?.params?.book;

  const onAddToWishList = useCallback(() => {
    dispatch(actionCreators.addToWishlist(route?.params?.book));
    setOpenModal(true);
  }, [dispatch, route]);

  const onCloseModal = useCallback(() => {
    setOpenModal(false);
    navigation.navigate(ROUTES.Wishlist.name);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <OkModal visible={openModal} onPress={onCloseModal} />
      <ScrollView style={styles.scrollArea}>
        <View style={styles.detailContainer}>
          <View style={styles.book}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.available}>Available</Text>
              <Text>{author}</Text>
              <Text>{year}</Text>
              <Text>{genre}</Text>
            </View>
          </View>
          <CustomButton
            text="ADD TO WISHLIST"
            style={styles.addButton}
            textStyle={styles.addButtonText}
            onPress={onAddToWishList}
          />
          <RentButton />
        </View>
        <CommentSection comments={COMMENTS} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default BookDetailScreen;
