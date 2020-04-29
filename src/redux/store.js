import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import login from './auth/reducer';
import books from './books/reducer';

const reducers = combineReducers({
  login,
  books
});

export default createStore(reducers, compose(applyMiddleware(thunk)));
