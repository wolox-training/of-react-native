import { actions } from './actions';

const initialState = {
  books: [],
  loading: false,
  error: null,
  search: '',
  wishlist: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    case actions.GET_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case actions.SEARCH:
      return {
        ...state,
        search: action.payload
      };
    case actions.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      };
    default:
      return state;
  }
}

export default reducer;
