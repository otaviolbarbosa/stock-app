import { ChangeEvent, useEffect, useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import { getChartData, getQuote } from '../../services/stock';
import {
  setStockSymbol,
  setQuote,
  setQuoteError,
  setChartData,
  setChartDataError,
  setLoading,
} from '../../redux/actions';

import * as SC from './styles';
import { RootState } from '../../interfaces';

const SearchBar = () => {
  const [searchString, setSearchString] = useState('');
  const { stockSymbol } = useSelector(({ stockReducer }: RootState) => stockReducer);
  const dispatch = useDispatch();
  let loop = null;

  useEffect(() => {
    async function fetch() {
      if (loop) clearInterval(loop);
      if (stockSymbol) loop = setInterval(fetchQuote, 2000);

      if (stockSymbol) {
        try {
          const chartDataRes = await getChartData(stockSymbol);
          dispatch(setChartData(chartDataRes.data));
        } catch (err) {
          dispatch(setChartDataError());
        }
      }
    }

    fetch();

    return () => clearInterval(loop);
  }, [stockSymbol]);

  const fetchQuote = async () => {
    if (stockSymbol !== '') {
      try {
        const quoteRes = await getQuote(stockSymbol);
        dispatch(setQuote(quoteRes.data));
      } catch (err) {
        console.log(err);
        dispatch(setQuoteError());
        clearInterval(loop);
      }
    }
    dispatch(setLoading(false));
  };

  const handleGetData = async (e) => {
    e.preventDefault();
    console.log('submit');
    batch(() => {
      dispatch(setLoading(true));
      dispatch(setStockSymbol(searchString.toLowerCase()));
    });
    setSearchString('');
  };

  const handleChange = (e: ChangeEvent & { target: HTMLInputElement }) => {
    setSearchString(e.target.value);
  };

  return (
    <SC.Container>
      <SC.Form onSubmit={handleGetData}>
        <SC.SearchInput placeholder="Ex.: aapl" value={searchString} onChange={handleChange} />
        <SC.SearchButton value="Buscar"></SC.SearchButton>
      </SC.Form>
    </SC.Container>
  );
};

export default SearchBar;
