import React from 'react';
import { View } from 'react-native';

import Book from './src/app/components/Book';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Book 
        bookImage={'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg'} 
        bookTitle={'Locked in time'} 
        bookAuthor={'Lois Dunca'} 
      />
    </View>
  );
}
