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
import { RootState } from "../../interfaces";
import moment from 'moment';

import * as CS from './styles';

const Chart = () => {
  const [data, setData] = useState([]);
  const { chartData } = useSelector(({ stockReducer }: RootState) => stockReducer);

  useEffect(() => {
    setData(chartData.map(line => {
      const date = moment(line.label).format('DD/MM/YY');
      
      return { date, price: line.close };
    }));  
  }, [chartData]);

  return (
    <CS.Container>
      <ResponsiveContainer>
        <LineChart width={940} height={400} data={data}>
          <CartesianGrid strokeDasharray="2 5" vertical={false} />
          <XAxis dataKey="date"  />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dot={false} dataKey="price" stroke="#0047bb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </CS.Container>
  )
}

export default Chart;
