import axios from "axios";

const address = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

const http = {
  get: address.get,
  post: address.post,
  delete: address.delete,
  patch: address.patch,
  put: address.put,
};
export default http;
