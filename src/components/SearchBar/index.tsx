import { ChangeEvent, useEffect, useState } from 'react';

import { getChartData, getLastPrice, getQuote } from '../../services/stock';
import { setQuote, setChartData } from '../../redux/actions'

import * as SC from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../interfaces';

const SearchBar = () => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [searchString, setSearchString] = useState('')
  const { quote, chartData } = useSelector(({ stockReducer }: RootState) => stockReducer)
  const dispatch = useDispatch();
  let loop = null;

  useEffect(() => {
    async function fetch() {
      if(loop) clearInterval(loop);
      loop = setInterval(fetchQuote, 3000);
  
      if(stockSymbol) {
        const chartDataRes = await getChartData(stockSymbol);
        dispatch(setChartData(chartDataRes.data));
      }
  
    }

    fetch();

    return () => clearInterval(loop);
  }, [stockSymbol]);

  const fetchQuote = async () => {
    if(stockSymbol !== '') {
      const quoteRes = await getQuote(stockSymbol);
      dispatch(setQuote(quoteRes.data));
    }
  }

  const handleGetData = async () => {
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