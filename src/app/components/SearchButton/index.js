import React, { useCallback } from 'react';
import { TouchableOpacity, Image } from 'react-native';

import icSearch from '@assets/Navigationbar/ic_search.png';
import { ROUTES } from '@constants/routes';

import styles from './styles';

function LogoutButton({ navigation }) {
  const goSearch = useCallback(() => {
    navigation.navigate(ROUTES.Search.name);
  }, [navigation]);
  return (
    <TouchableOpacity onPress={goSearch}>
      <Image source={icSearch} style={styles.image} />
    </TouchableOpacity>
  );
}

export default LogoutButton;
