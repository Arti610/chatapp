import axios from "axios";

const baseurl = "http://localhost:5000/api";

const api = axios.create({
  baseURL: baseurl,
});

export default api;
