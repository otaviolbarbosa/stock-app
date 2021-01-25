import { createStore, combineReducers } from 'redux';

import stockReducer from './stockReducer';
import favoriteReducer from './favoriteReducer';

const store = createStore(combineReducers({ stockReducer, favoriteReducer }), {});

export default store;
