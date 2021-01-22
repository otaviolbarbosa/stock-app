import styled from 'styled-components';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

export const Container = styled.div`
margin-top: 50px;
`;

export const SpacedRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CompanyName = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const StockPrice = styled.div`
  font-size: 2rem;
`;

export const StockSymbol = styled.div`
  color: #999;
`;

export const StockChange = styled.div`
  color: ${({ isPositive }) => isPositive ? 'green' : 'red'};
`;

export const StockChangePercent = styled.div`
  margin-left: 10px;
  color: ${({ isPositive }) => isPositive ? 'green' : 'red'};
`;

export const ArrowUp = styled(FaArrowUp).attrs({
  size: 24
})`
  color: ${({ isPositive }) => isPositive ? 'green' : 'red'};
`;

export const ArrowDown = styled(FaArrowDown).attrs({
  size: 24
})`
  color: ${({ isPositive }) => isPositive ? 'green' : 'red'};
`;
