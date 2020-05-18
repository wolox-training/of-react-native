import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Header } from '@react-navigation/stack';
import { StackHeaderProps } from '@react-navigation/stack/lib/typescript/src/types';

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
