import AsyncStorage from '@react-native-community/async-storage';

import api from '@config/api';

export const login = (email: string, password: string) => api.post('/auth/sign_in', { email, password });

export const getToken = () => AsyncStorage.getItem('access-token');

export const setToken = (token: string) => {
  AsyncStorage.setItem('access-token', token);
  api.setHeader('Authorization', token);
};

export const removeToken = () => {
  AsyncStorage.removeItem('access-token');
  api.deleteHeader('Authorization');
};
