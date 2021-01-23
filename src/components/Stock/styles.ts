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
  justify-content: center;
  align-items: baseline;
`;

export const CompanyName = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const StockPrice = styled.div`
  font-size: 2rem;

  &.upblinking {
    animation: upBlinkingText 2s;
  
    @keyframes upBlinkingText {
      from { background-color: green; }
      to { background-color: transparent; }
    }
  }

  &.downblinking {
    animation: downBlinkingText 2s;
  
    @keyframes downBlinkingText {
      from { background-color: red; }
      to { background-color: transparent; }
    }
  }
`;

export const StockSymbol = styled.div`
  color: #999;
  padding-right: 30px;
`;

export const StockParams = styled.div`
  padding-right: 10px;
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
