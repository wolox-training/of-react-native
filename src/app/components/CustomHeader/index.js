import React from 'react';
import { string, func } from 'prop-types';
import { StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native';
import { Header } from '@react-navigation/stack';

import { COLORS } from '@constants/colors';

const icNavbar = require('@assets/General/bc_navbar.png');

//import styles from './styles';

function CustomHeader(props) {
  return (
    <SafeAreaView style={{ backgroundColor: '#F5FCFF', marginBottom: 0, justifyContent: 'center' }}>
      <StatusBar backgroundColor={COLORS.blue} />
    <Image
      style={[{},StyleSheet.absoluteFill]}
      source={icNavbar}
    />
    <Header {...props} style={{ backgroundColor: '#transparent', alignSelf: 'center' }}/>
  </SafeAreaView>
  );
}

CustomHeader.propTypes = {
  text: string,
  onPress: func
};

export default CustomHeader;
