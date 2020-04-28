import { login } from '@services/AuthService';

export const actions = {
  SIGN_IN: '@@AUTH/SIGN_IN',
  SIGN_IN_SUCCESS: '@@AUTH/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: '@@AUTH/SIGN_IN_FAILURE'
};

const actionsCreators = {
  signIn: (email, password) => async (dispatch) => {
    dispatch({ type: actions.SIGN_IN });
    const response = await login(email, password);
    if (response.ok) {
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
  })
};

export default actionsCreators;
