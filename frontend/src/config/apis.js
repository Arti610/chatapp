import api from "./config";

export default {
  register: (payload) => api.post(`/auth/register`, payload),
  login: (payload) => api.post(`/auth/login`, payload),
  logout: () => api.post(`/auth/logout`),
  getConversations: () => api.get("/users"),
  sendMessage: (id, payload) => api.post(`/message/send/${id}`, payload),
  // getMessage: (id) => api.get(console.log('id',id)),
  getMessage: (id) => api.get(`/message/${id}`),
};
