import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  }
});

export default apiRequest;