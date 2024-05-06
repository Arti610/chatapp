import axios from "axios";

const baseurl = "http://localhost:5000/api";

const api = axios.create({
  baseURL: baseurl,
});

api.interceptors.request.use(async (config) => {
  try {
    let token;
    const storage = await localStorage.getItem("chat-user");

    if (storage) {
      const parsedToken = JSON.parse(storage);
      token = parsedToken.token;
    }
    
    if (token !== null) {
      config.headers["Authorization"] = `${token}`;
    }

    return config;
  } catch (error) {
    throw error;
  }
});

export default api;
