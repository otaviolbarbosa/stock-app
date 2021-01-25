import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import moment from 'moment';

import { RootState } from "../../interfaces";
import * as SC from './styles';

const Chart = () => {
  const [data, setData] = useState([]);
  const { chartData, chartDataError } = useSelector(({ stockReducer }: RootState) => stockReducer);

  useEffect(() => {
    chartData && setData(chartData.map(line => {
      const date = moment(line.label).format('DD/MM/YY');
      
      return { date, price: line.close };
    }));  
  }, [chartData]);

  return chartDataError ? (
    <SC.Error>Erro: Não é possível exibir o gráfico</SC.Error>
  ) : (
    <SC.Container>
      <ResponsiveContainer>
        <LineChart width={940} height={400} data={data}>
          <CartesianGrid strokeDasharray="2 5" vertical={false} />
          <XAxis dataKey="date"  />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dot={false} dataKey="price" stroke="#0047bb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </SC.Container>
  )
}

export default Chart;
