import { applyMiddleware, createStore, compose } from 'redux';

import stockReducer from './stockReducer';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const store = createStore(
  stockReducer,
  {},
  composeEnhancers()
);

export default store;
