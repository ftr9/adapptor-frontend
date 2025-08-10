import axios from "axios";

export const BASE_API = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});
