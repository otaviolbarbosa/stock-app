import { useDispatch, useSelector } from "react-redux";

import { RootState } from '../../interfaces';
import { addToFavorites, removeFromFavorites } from '../../redux/actions';

import * as SC from './styles';

const Stock = () => {
  const { stockSymbol, quote, quoteError } = useSelector(({ stockReducer }: RootState) => stockReducer);
  const { favorites } = useSelector(({ favoriteReducer }: RootState) => favoriteReducer);

  const dispatch = useDispatch();

  const roundedNumber = (number: Number) => {
    return number.toFixed(2);
  }

  const drawArrow = () => handleIsPositive() 
    ? <SC.ArrowUp isPositive={handleIsPositive()} />
    : <SC.ArrowDown isPositive={handleIsPositive()} />;

  const handleIsPositive = () => quote && quote.change > 0;

  const toggleFavorite = () => {
    const { companyName, symbol  } = quote;
    console.log({ companyName, symbol }, isFavorite());
    return isFavorite() 
      ? dispatch(removeFromFavorites(stockSymbol))
      : dispatch(addToFavorites({ companyName, symbol }));
  }

  const isFavorite = () => favorites.length > 0 && favorites.some(fav => fav.symbol === quote.symbol);

  const showStar = () => {
    return isFavorite() 
      ? <SC.Star onClick={toggleFavorite} />
      : <SC.RegStar onClick={toggleFavorite} />
  }

  console.log(favorites);
  return !quoteError && (
    <SC.Container>
        {showStar()}
      <SC.Info>
        <SC.Column>
          <SC.CompanyName>{quote.companyName}</SC.CompanyName>
          <SC.StockSymbol>{quote.symbol}</SC.StockSymbol>
        </SC.Column>
        <SC.Column>
          <SC.StockPrice>{drawArrow()}${roundedNumber(quote.latestPrice)}</SC.StockPrice>
          <SC.Row>
            <SC.StockChange isPositive={handleIsPositive()}>${roundedNumber(quote.change)}</SC.StockChange>
            <SC.StockChangePercent isPositive={handleIsPositive()}>{roundedNumber(quote.changePercent)}%</SC.StockChangePercent>
          </SC.Row>
        </SC.Column>
      </SC.Info>
    </SC.Container>
  );
}

export default Stock;
