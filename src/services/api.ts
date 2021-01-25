import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  // baseURL: process.env.API_URL,
  baseURL: `https://cloud.iexapis.com/stable`,
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  config.params = { token: 'pk_20cc7cbbd64d41ddb1f7eedf86dbda03' };

  return config;
});

export default api;
