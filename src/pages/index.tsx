import SearchBar from '../components/SearchBar';
import Stock from '../components/Stock';
import Loading from '../components/Loading';
import Starred from '../components/Starred';

import * as SC from './styles';
import Chart from '../components/Chart';
import { useSelector } from 'react-redux';
import { RootState } from '../interfaces';

export default function Home() {
  const { quote, quoteError, loading } = useSelector(({ stockReducer }: RootState) => stockReducer);

  return (
    <SC.Container>
      <h1>Stock App</h1>
      <SC.Content>
        <Starred />
        <SC.Main>
          <SearchBar />
          {quote && (
            <>
              <Stock />
              <Chart />
            </>
          )}
          {quoteError && <SC.NotFound>Esta ação não foi encontrada</SC.NotFound>}
          {loading && <Loading />}
        </SC.Main>
      </SC.Content>
    </SC.Container>
  );
}
