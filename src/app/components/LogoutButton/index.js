import React, { useCallback } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';

import icLogout from '@assets/Navigationbar/ic_logout.png';
import actionsCreators from '@redux/auth/actions';
import { ROUTES } from '@constants/routes';

import styles from './styles';

function LogoutButton({ navigation }) {
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch(actionsCreators.logout());
    navigation.navigate(ROUTES.Login.name);
  }, [dispatch, navigation]);
  return (
    <TouchableOpacity onPress={logout}>
      <Image source={icLogout} style={styles.image} />
    </TouchableOpacity>
  );
}

export default LogoutButton;
