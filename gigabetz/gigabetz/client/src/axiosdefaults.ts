import axios from "axios";
import { getUrl } from "./utils/utils";

export function setAxiosDefault() {
  console.log("api url=", getUrl());
  axios.defaults.timeout = 30 * 1000;
  axios.defaults.baseURL = getUrl();
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["cross-origin"] = true;
}
export function setToken(token: string) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export function getToken() {
  return axios.defaults.headers.common["Authorization"];
}
