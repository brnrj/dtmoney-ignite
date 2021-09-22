import axios from "axios";

export const api = axios.create({
  baseURL: 'https://dtmoney-ignite-brnrj.vercel.app/api',
})