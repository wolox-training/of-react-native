import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';

import CustomButton from '@components/CustomButton';
import CommentSection from '@components/CommentSection';

import { COMMENTS } from './constants';
import styles from './styles';
import RentButton from './components/RentButton';

function BookDetailScreen({ route }) {
  const { imageUrl, title, author, year, genre } = route?.params?.book;
  return (
    <SafeAreaView style={styles.container}>
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
          <CustomButton text="ADD TO WISHLIST" style={styles.addButton} textStyle={styles.addButtonText} />
          <RentButton />
        </View>
        <CommentSection comments={COMMENTS} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default BookDetailScreen;
