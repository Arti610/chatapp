import api from "./config";

export default {
  register : (payload) => api.post(`/auth/register`,  payload),
  login : (payload) => api.post(`/auth/login`, payload),
  logout : () => api.post(`/auth/logout`),
  getUsers:()=> api.get('/users')
};
