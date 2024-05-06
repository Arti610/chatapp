import api from "./config";

export default {
  register: (payload) => api.post(`/auth/register`, payload),
  login: (payload) => api.post(`/auth/login`, payload),
  logout: () => api.post(`/auth/logout`),
  getConversations: () => api.get("/users"),
  sendMessage: (id, payload) => api.post(`/message/send/${id}`, payload),
  getMessage: (id) => api.post(`/message/${id}`),
};
