import axios from 'axios';

export const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers,
});
export const token = localStorage.getItem('token');
export const tokenType = localStorage.getItem('token_type');
api.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `${tokenType} ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default api;
