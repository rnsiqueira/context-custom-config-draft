import axios from "axios";
import { parseCookies } from "nookies";
import { env } from "process";

export function getAPIClient(ctx?: any) {
  const { 'nextauth.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: env.BACKEND_BASE_URL
  })

  api.interceptors.request.use(config => {

    return config;
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}