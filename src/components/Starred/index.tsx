import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../interfaces';
import { setLoading, setStockSymbol } from '../../redux/actions';
import * as SC from './styles';

const Starred = () => {
  const { favorites } = useSelector(({ favoriteReducer }: RootState) => favoriteReducer);
  const dispatch = useDispatch();

  const handleSetStockSymbol = (stockSymbol: string) => {
    dispatch(setLoading(true));
    dispatch(setStockSymbol(stockSymbol));
  };

  return (
    <SC.Container>
      <h2>Favoritos</h2>
      {favorites.length > 0 ? (
        favorites.map((fav) => (
          <SC.FavoriteContainer onClick={() => handleSetStockSymbol(fav.symbol)} key={fav.symbol}>
            <SC.FavoriteInfo>
              <SC.FavoriteCompanyName>{fav.companyName}</SC.FavoriteCompanyName>
              <SC.FavoriteSymbol>{fav.symbol}</SC.FavoriteSymbol>
            </SC.FavoriteInfo>
            <SC.FavoriteIcon />
          </SC.FavoriteContainer>
        ))
      ) : (
        <div>Nenhuma ação favoritada</div>
      )}
    </SC.Container>
  );
};

export default Starred;
