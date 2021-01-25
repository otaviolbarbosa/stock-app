import api from './api';

export const getLastPrice = async (stockSymbol: string) => {
  return await api.get(`stock/${stockSymbol}/quote/latestPrice`);
};

export const getQuote = async (stockSymbol: string) => {
  return await api.get(`stock/${stockSymbol}/quote`);
};

export const getCompany = async (stockSymbol: string) => {
  return await api.get(`stock/${stockSymbol}/company`);
};

export const getChartData = async (stockSymbol: string) => {
  return await api.get(`stock/${stockSymbol}/chart/1m`);
};
