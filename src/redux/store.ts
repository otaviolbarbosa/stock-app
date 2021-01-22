import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import stockReducer from './reducer';

// const composeEnhancers = window ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose : compose;

const store = createStore(
  combineReducers({ stockReducer }),
  {},
  // composeEnhancers()
);

export default store;
