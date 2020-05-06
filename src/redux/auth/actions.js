import { login, setToken, removeToken } from '@services/AuthService';
import api from '@config/api';

export const actions = {
  SIGN_IN: '@@AUTH/SIGN_IN',
  SIGN_IN_SUCCESS: '@@AUTH/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: '@@AUTH/SIGN_IN_FAILURE',
  SAVE_CURENT_TOKEN: '@@AUTH/SAVE_CURENT_TOKEN',
  LOGOUT: '@@AUTH/LOGOUT'
};

export const actionsCreators = {
  signIn: (email, password) => async (dispatch) => {
    dispatch({ type: actions.SIGN_IN });
    const response = await login(email, password);
    if (response.ok) {
      setToken(response?.headers['access-token']);
      dispatch(actionsCreators.signInSuccess(response?.headers['access-token']));
    } else dispatch(actionsCreators.signInFailure(response.problem));
  },
  signInSuccess: (token) => ({
    type: actions.SIGN_IN_SUCCESS,
    payload: token
  }),
  signInFailure: (problem) => ({
    type: actions.SIGN_IN_FAILURE,
    payload: problem
  }),
  saveCurrentToken: (token) => {
    api.setHeader('Authorization', token);
    return { type: actions.SAVE_CURENT_TOKEN, payload: token };
  },
  logout: () => {
    removeToken();
    return { type: actions.LOGOUT };
  }
};

export default actionsCreators;
