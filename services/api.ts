import axios from "axios";

export const BASE_API = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});
