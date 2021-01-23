import { RootStateOrAny } from 'react-redux';

import * as C from './constants';

const INITIAL_STATE: RootStateOrAny = {
  quote: null,
  chartData: null,
  loading: false
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case C.STOCK_SET_CHART_DATA:
      const { data: chartData } = payload;
      return {
        ...state,
        chartData,
      };
    case C.STOCK_SET_QUOTE:
      const { data: quote } = payload;
      return {
        ...state,
        quote,
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
