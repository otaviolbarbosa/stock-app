import { RootStateOrAny } from 'react-redux';
import { Favorite } from '../interfaces';

import * as C from './constants';

const INITIAL_STATE: RootStateOrAny = {
  favorites: [],
  error: false,
  loading: false,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case C.FAVORITE_ADD:
      const { favorite } = payload;
      return {
        ...state,
        favorites: [...state.favorites, favorite],
      };
    case C.FAVORITE_REMOVE:
      const { stockSymbol } = payload;
      return {
        ...state,
        favorites: state.favorites.filter(
          (fav: Favorite) => fav.symbol.toLowerCase() !== stockSymbol.toLowerCase()
        ),
      };
    default:
      return state;
  }
};

export default reducer;
