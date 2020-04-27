import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import login from './auth/reducer';

export default createStore(login, compose(applyMiddleware(thunk)));
