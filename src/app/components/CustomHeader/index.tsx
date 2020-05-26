import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Header, StackHeaderProps } from '@react-navigation/stack';

import { COLORS } from '@constants/colors';

function CustomHeader(props: StackHeaderProps) {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.blue} />
      <Header {...props} />
    </SafeAreaView>
  );
}

export default CustomHeader;
