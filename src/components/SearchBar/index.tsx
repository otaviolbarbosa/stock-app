import { ChangeEvent, useEffect, useState } from 'react';

import { getChartData, getLastPrice, getQuote } from '../../services/stock';
import { setQuote, setChartData } from '../../redux/actions'

import * as SC from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../interfaces';

const SearchBar = () => {
  const [stockSymbol, setStockSymbol] = useState('');
  const { quote } = useSelector(({ stockReducer }: RootState) => stockReducer)
  const dispatch = useDispatch();

  const handleGetData = async () => {
    const quoteRes = await getQuote(stockSymbol);
    dispatch(setQuote(quoteRes.data));
    const chartDataRes = await getChartData(stockSymbol);
    dispatch(setChartData(chartDataRes.data));
    // const stockLastPrice = await getLastPrice(stockSymbol);
    // setLastPrice(stockLastPrice.data);
  }

  const handleChange = (e: ChangeEvent & { target: HTMLInputElement }) => {
    setStockSymbol(e.target.value);
  }

  return (
    <SC.Container>
      <SC.SearchInput placeholder="Ex.: aapl" value={stockSymbol} onChange={handleChange} />
      <SC.SearchButton onClick={handleGetData}>Buscar</SC.SearchButton>
    </SC.Container>
  )
}

export default SearchBar;