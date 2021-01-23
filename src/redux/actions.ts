import { action } from 'typesafe-actions';

import * as C from './constants';

export const setQuote = (data: Object) => action(C.STOCK_SET_QUOTE, { data });

export const setChartData = (data: Object) => action(C.STOCK_SET_CHART_DATA, { data });

export const setLoading = (isLoading: Boolean) => action(C.STOCK_IS_LOADING, { isLoading });
