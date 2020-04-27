import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import login from './auth/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(login, composeEnhancers(applyMiddleware(thunk)));
