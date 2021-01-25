import api from './api';

export const getLastPrice = async (stockSymbol: String) => {
  return await api.get(`stock/${stockSymbol}/quote/latestPrice`);
};

export const getQuote = async (stockSymbol: String) => {
  return await api.get(`stock/${stockSymbol}/quote`);
};
  
export const getCompany = async (stockSymbol: String) => {
  return await api.get(`stock/${stockSymbol}/company`);
};
  
export const getChartData = async (stockSymbol: String) => {
  return await api.get(`stock/${stockSymbol}/chart/1m`);
};
  