import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa'

export const Container = styled.div`
  width: 25%;
  padding-right: 30px;
  border-right: 1px solid #ccc;
`;

export const FavoriteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  
  &+& {
    border-top: 1px solid #ccc;
  }
`;

export const FavoriteInfo = styled.div``;

export const FavoriteIcon = styled(FaChevronRight)`
  color: #999;
  margin-left: 8px;
`;

export const FavoriteCompanyName = styled.div`
  font-weight: bold;
`;

export const FavoriteSymbol = styled.div`
  color: #999;
  font-size: 0.8rem;
`;
