import React from 'react';
import { View } from 'react-native';

import Book from '@components/Book';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Book 
        image={'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg'} 
        title={'Locked in time'} 
        author={'Lois Dunca'} 
      />
    </View>
  );
}
