import React from 'react';
import { Modal, Text, View, Image, GestureResponderEvent } from 'react-native';

import check from '@assets/General/check.gif';
import { COLORS } from '@constants/colors';
import CustomButton from '@components/CustomButton';

import styles from './styles';

interface ModalProps {
  visible: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

function OkModal({ visible, onPress }: ModalProps) {
  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <View style={styles.container}>
        <Image style={styles.gif} source={check} />
        <Text style={styles.title}>Added to wishlist!</Text>
      </View>
      <View>
        <CustomButton
          text="GO TO WISHLIST"
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={onPress}
          loaderColor={COLORS.blue}
        />
      </View>
    </Modal>
  );
}

export default OkModal;
