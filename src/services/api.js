import axios from "axios";
import axiosRetry from "axios-retry";
const BASE_URL="https://maaptol.in/api/";
const baseURL="https://maaptol.in/api/";
const appVersion=10;

const api = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      "x-app-name": "CX",
      "x-app-version": appVersion,
    },
  });


axiosRetry(api, { retryDelay: axiosRetry.exponentialDelay, retries: 3 });

export const getDelayedData = () => api.get("/cl-user/delayed-setup-3");