import { login, setToken, getToken } from '@services/AuthService';
import api from '@config/api';

export const actions = {
  SIGN_IN: '@@AUTH/SIGN_IN',
  SIGN_IN_SUCCESS: '@@AUTH/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: '@@AUTH/SIGN_IN_FAILURE',
  GET_CURENT_TOKEN: '@@AUTH/GET_CURENT_TOKEN'
};

const actionsCreators = {
  signIn: (email, password) => async (dispatch) => {
    dispatch({ type: actions.SIGN_IN });
    const response = await login(email, password);
    if (response.ok) {
      api.setHeader('Authorization', response.headers['access-token']);
      setToken(response.headers['access-token']);
      dispatch(actionsCreators.signInSuccess(response.headers['access-token']));
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
  getCurrentToken: () => async (dispatch) => {
    const token = await getToken();
    if (token) {
      dispatch({ type: actions.GET_CURENT_TOKEN, payload: token });
    }
  }
};

export default actionsCreators;
