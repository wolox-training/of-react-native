import { getBooks } from '@services/BookService';

export const actions = {
  GET_BOOKS: '@@BOOKS/GET_BOOKS',
  GET_BOOKS_SUCCESS: '@@BOOKS/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: '@@BOOKS/GET_BOOKS_FAILURE',
  SEARCH: '@@BOOKS/SEARCH',
  ADD_TO_WISHLIST: '@@BOOKS/ADD_TO_WISHLIST'
};

const actionCreators = {
  getBooks: () => async (dispatch) => {
    dispatch({ type: actions.GET_BOOKS });
    const response = await getBooks();
    if (response.ok) {
      dispatch({
        type: actions.GET_BOOKS_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_BOOKS_FAILURE,
        payload: response.problem
      });
    }
  },
  search: (search) => ({
    type: actions.SEARCH,
    payload: search
  }),
  addToWishlist: (book) => ({
    type: actions.ADD_TO_WISHLIST,
    payload: book
  })
};

export default actionCreators;
