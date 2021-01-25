import { useSelector } from "react-redux";
import { RootState } from '../../interfaces';

import * as SC from './styles';

const Stock = () => {
  const { quote, quoteError } = useSelector(({ stockReducer }: RootState) => stockReducer);

  const roundedNumber = (number: Number) => {
    return number.toFixed(2);
  }

  const drawArrow = () => handleIsPositive() 
    ? <SC.ArrowUp isPositive={handleIsPositive()} />
    : <SC.ArrowDown isPositive={handleIsPositive()} />;
  const handleIsPositive = () => quote && quote.change > 0;

  return !quoteError && (
    <SC.Container>
      <SC.SpacedRow>
        <SC.CompanyName>
          {quote.companyName}
        </SC.CompanyName>
        <SC.StockPrice>{drawArrow()}${roundedNumber(quote.latestPrice)}</SC.StockPrice>
      </SC.SpacedRow>
      <SC.SpacedRow>
        <SC.Row>
          <SC.StockSymbol>{quote.symbol}</SC.StockSymbol>
        </SC.Row>
        <SC.Row>
          <SC.StockChange isPositive={handleIsPositive()}>${roundedNumber(quote.change)}</SC.StockChange>
          <SC.StockChangePercent isPositive={handleIsPositive()}>{roundedNumber(quote.changePercent)}%</SC.StockChangePercent>
        </SC.Row>
      </SC.SpacedRow>
    </SC.Container>
  );
}

export default Stock;
