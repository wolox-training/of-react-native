import AsyncStorage from '@react-native-community/async-storage';

import api from '@config/api';

export const login = (email, password) =>
  api.post('/auth/sign_in', { email, password });

export const getToken = async () => {
  const data = await AsyncStorage.getItem('access-token');
  return data;
};

export const setToken = token => {
  AsyncStorage.setItem('access-token', token);
};
