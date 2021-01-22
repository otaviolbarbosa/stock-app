import { useSelector } from "react-redux";
import { RootState } from '../../interfaces';

import * as SC from './styles';

const Stock = () => {
  const { quote, chartData } = useSelector(({ stockReducer }: RootState) => stockReducer);

  const roundedNumber = (number: Number) => {
    return number.toFixed(2);
  }

  const drawArrow = () => handleIsPositive() 
    ? <SC.ArrowUp isPositive={handleIsPositive()} />
    : <SC.ArrowDown isPositive={handleIsPositive()} />;
  const handleIsPositive = () => quote && quote.change > 0;

  return quote ? (
    <SC.Container>
      <SC.SpacedRow>
        <SC.CompanyName>{quote.companyName}</SC.CompanyName>
        <SC.StockPrice>{drawArrow()}${quote.latestPrice}</SC.StockPrice>
      </SC.SpacedRow>
      <SC.SpacedRow>
        <SC.StockSymbol>{quote.companyName}</SC.StockSymbol>
        <SC.Row>
          <SC.StockChange isPositive={handleIsPositive()}>{quote.change}</SC.StockChange>
          <SC.StockChangePercent isPositive={handleIsPositive()}>{roundedNumber(quote.changePercent)}%</SC.StockChangePercent>
        </SC.Row>
      </SC.SpacedRow>
    </SC.Container>
  ) : null;
}

export default Stock;