import { RootStateOrAny } from 'react-redux';

import * as C from './constants';

const INITIAL_STATE: RootStateOrAny = {
  stockSymbol: null,
  quote: null,
  quoteError: false,
  chartData: null,
  chartDataError: false,
  loading: false
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case C.STOCK_SET_STOCK_SYMBOL:
      const { stockSymbol } = payload;
      return {
        ...state,
        stockSymbol
      };
    case C.STOCK_SET_CHART_DATA:
      const { data: chartData } = payload;
      return {
        ...state,
        chartData,
        chartDataError: false,
      };
    case C.STOCK_SET_CHART_DATA_ERROR:
      return {
        ...state,
        chartData: null,
        chartDataError: true
      };
    case C.STOCK_SET_QUOTE:
      const { data: quote } = payload;
      return {
        ...state,
        quote,
        quoteError: false,
      };
    case C.STOCK_SET_QUOTE_ERROR:
      return {
        ...state,
        quote: null,
        quoteError: true,
      };
    case C.STOCK_IS_LOADING:
      const { isLoading } = payload;
      return {
        ...state,
        loading: isLoading
      }
    default:
      return state;
  }
};

export default reducer;
