import React from 'react';
import { View } from 'react-native';

import { BOOKS } from './constants';
import styles from './styles';
import Library from '@components/Library';

function LibraryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Library books={BOOKS} navigation={navigation}/>
    </View>
  );
}

export default LibraryScreen;
