import { login } from '@services/AuthService';

export const actions = {
  SIGN_IN: '@@AUTH/SIGN_IN',
  SIGN_IN_SUCCESS: '@@AUTH/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: '@@AUTH/SIGN_IN_FAILURE',
  SET_LOADING: '@@AUTH/SET_LOADING',
  SET_AUTHENTICATED: '@@AUTH/SET_AUTHENTICATED',
  SET_TOKEN: '@@AUTH/SET_TOKEN'
};

const actionsCreators = {
  signIn: (email, password) => async (dispatch) => {
    dispatch(actionsCreators.setLoading(true));
    const response = await login(email, password);
    if (response.ok) {
      dispatch(actionsCreators.signInSuccess(response.data.token));
    } else dispatch(actionsCreators.signInFailure(response.problem));
  },
  signInSuccess: (token) => ({
    type: actions.SIGN_IN_SUCCESS,
    payload: { token, userAuthenticated: true }
  }),
  signInFailure: (problem) => ({
    type: actions.SIGN_IN_FAILURE,
    payload: { userAuthenticated: false, error: problem }
  }),
  setLoading: (load) => ({
    type: actions.SET_LOADING,
    payload: { loading: load }
  }),
  setAuthenticated: (boolean) => ({
    type: actions.SET_AUTHENTICATED,
    payload: boolean
  }),
  setToken: (token) => ({
    type: actions.SET_TOKEN,
    payload: token
  })
};

export default actionsCreators;
