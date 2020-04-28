import { actions } from './actions';

const initialState = {
  loading: false,
  token: '',
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SIGN_IN:
      return {
        ...state,
        loading: true,
        token: '',
        error: null
      };
    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false
      };
    case actions.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case actions.SAVE_CURENT_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
