import axios from "axios";

export const getSummary = () => {
  return axios.get("https://api.covid19api.com/summary");
};
