import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Header } from '@react-navigation/stack';

import { COLORS } from '@constants/colors';

function CustomHeader(props) {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.blue} />
      <Header {...props} />
    </SafeAreaView>
  );
}

export default CustomHeader;
