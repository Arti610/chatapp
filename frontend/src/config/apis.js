import api from "./config";

export default {
  register : (payload) => api.post(`/auth/register`,  payload),
  login : (payload) => api.post(`login`, console.log("payload login", payload)),
};
