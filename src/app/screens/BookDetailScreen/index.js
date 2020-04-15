import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';

import CustomButton from '@components/CustomButton';

import styles from './styles';

function BookDetailScreen({ route }) {
  const { imageUrl, title, author, year, genre } = route?.params?.book;
  return (
    <SafeAreaView style={styles.container}>
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
        <CustomButton text="RENT" style={styles.rentButton} textStyle={styles.rentButtonText} />
      </View>
    </SafeAreaView>
  );
}

export default BookDetailScreen;
