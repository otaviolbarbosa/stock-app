import { action } from 'typesafe-actions';
import { Favorite } from '../interfaces';

import * as C from './constants';

// Stock actions
export const setStockSymbol = (stockSymbol: String) => action(C.STOCK_SET_STOCK_SYMBOL, { stockSymbol });
export const setQuote = (data: Object) => action(C.STOCK_SET_QUOTE, { data });
export const setQuoteError = () => action(C.STOCK_SET_QUOTE_ERROR);
export const setChartData = (data: Object) => action(C.STOCK_SET_CHART_DATA, { data });
export const setChartDataError = () => action(C.STOCK_SET_CHART_DATA_ERROR);
export const setLoading = (isLoading: Boolean) => action(C.STOCK_IS_LOADING, { isLoading });

// Favorite actions
export const addToFavorites = (favorite: Favorite) => action(C.FAVORITE_ADD, { favorite });
export const removeFromFavorites = (stockSymbol: String) => action(C.FAVORITE_REMOVE, { stockSymbol });
