import React from 'react';
import { SafeAreaView } from 'react-native';

import Library from '@components/Library';
import { BOOKS } from './constants';
import styles from './styles';

function LibraryScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Library books={BOOKS} navigation={navigation} />
    </SafeAreaView>
  );
}

export default LibraryScreen;
