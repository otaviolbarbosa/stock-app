import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getChartData, getQuote } from '../../services/stock';
import { setQuote, setQuoteError, setChartData, setChartDataError, setLoading } from '../../redux/actions'

import * as SC from './styles';

const SearchBar = () => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [searchString, setSearchString] = useState('')
  const dispatch = useDispatch();
  let loop = null;

  useEffect(() => {
    async function fetch() {
      if(loop) clearInterval(loop);
      loop = setInterval(fetchQuote, 3000);

      if(stockSymbol) {
        try {
          const chartDataRes = await getChartData(stockSymbol);
          dispatch(setChartData(chartDataRes.data));
        } catch(err) {
          dispatch(setChartDataError());
        }
      }
    }

    fetch();

    return () => clearInterval(loop);
  }, [stockSymbol]);

  const fetchQuote = async () => {
    if(stockSymbol !== '') {
      try {
        const quoteRes = await getQuote(stockSymbol);
        dispatch(setQuote(quoteRes.data));
      } catch(err) {
        console.log(err);
        dispatch(setQuoteError());
        clearInterval(loop);
      }
    }
    dispatch(setLoading(false));
  }

  const handleGetData = async () => {
    dispatch(setLoading(true));
    setStockSymbol(searchString);
  }

  const handleChange = (e: ChangeEvent & { target: HTMLInputElement }) => {
    setSearchString(e.target.value);
  }

  return (
    <SC.Container>
      <SC.SearchInput placeholder="Ex.: aapl" value={searchString} onChange={handleChange} />
      <SC.SearchButton onClick={handleGetData}>Buscar</SC.SearchButton>
    </SC.Container>
  )
}

export default SearchBar;
