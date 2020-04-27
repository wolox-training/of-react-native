import api from '@config/api';

export const login = (email, password) => api.post('/auth/sign_in', { email, password });
