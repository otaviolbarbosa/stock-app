import axios, { AxiosRequestConfig } from 'axios';

import { getToken } from '../utils/auth';

const api = axios.create({
  // baseURL: process.env.API_URL,
  baseURL: `https://cloud.iexapis.com/stable`,
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  // const token = getToken();
  config.params = { token: 'pk_2814f72efb764fd7ab72dd879a725e3f' };
  // config.params['token'] = token;

  return config;
});

export default api;
