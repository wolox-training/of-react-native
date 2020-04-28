import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import icLogout from '@assets/Navigationbar/ic_logout.png';

import styles from './styles';

function LogoutButton({ navigation }) {
  // const dispatch = useDispatch();

  // const logout = useCallback()
  return (
    <TouchableOpacity onPress={() => null}>
      <Image source={icLogout} style={styles.image} />
    </TouchableOpacity>
  );
}

export default LogoutButton;
