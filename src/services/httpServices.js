import axios from "axios";

const address = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://freelancer-project-backend-87md.onrender.com/api",
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
