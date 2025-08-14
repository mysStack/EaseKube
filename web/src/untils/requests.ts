import axios from 'axios';

const service = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

service.interceptors.response.use(
  response => response.data, // 直接返回 data
  error => Promise.reject(error)
);

export default service;
