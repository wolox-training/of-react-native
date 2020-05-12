import React from 'react';
import { Modal, Text, View, Image, Button } from 'react-native';

import check from '@assets/General/check.gif';
import { COLORS } from '@constants/colors';
import styles from './styles';

function OkModal({ visible, onPress }) {
  return (
    <Modal animationType="slide" transparent={false} visible={visible} onRequestClose={onPress}>
      <View style={styles.container}>
        <Image style={styles.gif} source={check} />
        <Text style={styles.title}>Added to wishlist!</Text>
      </View>
      <Button style={styles.button} onPress={onPress} title="GO TO WISHLIST" color={COLORS.main} />
    </Modal>
  );
}

export default OkModal;
