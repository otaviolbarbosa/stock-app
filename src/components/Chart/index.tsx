import { useSelector } from "react-redux";
import { RootState } from "../../interfaces";

import * as CS from './styles';

const Chart = () => {
  const { chartData } = useSelector(({ stockReducer }: RootState) => stockReducer);

  return (
    <CS.Container>chart</CS.Container>
  )
}

export default Chart;
